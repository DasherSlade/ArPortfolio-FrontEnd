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

  getImages(name: string): Promise<string> {
    const imagesRef = ref(this.storage, 'imagen');
    return list(imagesRef)
      .then(async (response) => {
        for (let item of response.items) {
          if (item.name === name) {
            const url = await getDownloadURL(item);
            console.log("la url es: " + url);
            return url;
          }
        }
        return ''; // Devolver un valor por defecto en caso de que no se encuentre una imagen con el nombre especificado
      })
      .catch(error => {
        console.log(error);
        return ''; // Devolver un valor por defecto en caso de que ocurra un error
      });
  }
}
