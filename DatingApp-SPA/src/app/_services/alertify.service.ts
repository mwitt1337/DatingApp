import * as alertify from '../../../node_modules/alertifyjs/build/alertify.js';
import { ErrorInterceptor } from './error.interceptor';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

confirm(message: string, okCallback: () => any) {
  alertify.confirm(message, function(e) {
    if (e) {
      okCallback();
    } else {}
  });
}

success(message: string) {
alertify.success(message);
}

error(message: string) {
  alertify.alert(message);
}

warning(message: string) {
  alertify.warning(message);
}

message(message: string) {
  alertify.message(message);
}

}
