import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, list, ref, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage(file: File, name: string): Promise<void> {
    console.log('Archivo a subir:', file);
    const imgRef = ref(this.storage, `imagen/` + name);
    return uploadBytes(imgRef, file)
      .then(response => {
        this.getImages(name);
      })
      .catch(error => console.log(error));
  }

  getImages(name: string) {
    const imagesRef = ref(this.storage, 'imagen')
    list(imagesRef)
      .then(async response => {
        for (let item of response.items) {
          if (item.name === name) {
            this.url = await getDownloadURL(item);
            console.log("la url es: " + this.url);
            break;
          }
        }
      })
      .catch(error => console.log(error))
  }
}
