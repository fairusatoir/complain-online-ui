import { HttpResponse } from '@angular/common/http';

export function Download(data: HttpResponse<Blob>) {
  const contentDisposition = data.headers.get('content-disposition');
  const contentDispositionFileName = contentDisposition.split('filename=')[1];
  const fileName = contentDispositionFileName.replace(/"/g, '');

  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(data.body, fileName);
  } else {
    var downloadURL = window.URL.createObjectURL(data.body);
    var link = document.createElement('a');
    link.href = downloadURL;
    link.download = fileName;
    link.click();
  }

  return data;
}
