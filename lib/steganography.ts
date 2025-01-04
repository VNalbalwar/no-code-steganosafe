export class LSBSteganography {
  static async encode(image: File, message: string): Promise<Blob> {
    const img = await createImageBitmap(image);
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas rendering context not available.');

    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Convert message to binary
    const binary = Array.from(message).map(char =>
      char.charCodeAt(0).toString(2).padStart(8, '0')
    ).join('') + '00000000'; // Add null terminator

    const maxMessageBits = Math.floor(data.length / 4) * 3;
    if (binary.length > maxMessageBits) {
      throw new Error(
        `Message too long for this image. Maximum message size: ${Math.floor(maxMessageBits / 8)} characters.`
      );
    }

    let binaryIndex = 0;
    for (let i = 0; i < data.length && binaryIndex < binary.length; i += 4) {
      // Modify only RGB channels (skip alpha)
      for (let j = 0; j < 3 && binaryIndex < binary.length; j++) {
        data[i + j] = (data[i + j] & 0xFE) | parseInt(binary[binaryIndex], 10);
        binaryIndex++;
      }
    }

    ctx.putImageData(imageData, 0, 0);

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error('Could not create image blob'));
          return;
        }
        resolve(blob);
      }, 'image/png');
    });
  }

  static async decode(image: File): Promise<string> {
    const img = await createImageBitmap(image);
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas rendering context not available.');

    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    let binary = '';
    let byte = '';

    for (let i = 0; i < data.length; i += 4) {
      // Extract from RGB channels
      for (let j = 0; j < 3; j++) {
        byte += (data[i + j] & 0x01).toString();
        if (byte.length === 8) {
          if (byte === '00000000') {
            // Found null terminator
            const message = binary.match(/.{8}/g)?.map(byte =>
              String.fromCharCode(parseInt(byte, 2))
            ).join('');
            if (message === undefined) {
              throw new Error('Error decoding message.');
            }
            return message;
          }
          binary += byte;
          byte = '';
        }
      }
    }

    throw new Error('No hidden message found');
  }
}
