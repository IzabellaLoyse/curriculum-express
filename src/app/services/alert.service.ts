import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarRef,
  TextOnlySnackBar,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private snackBar: MatSnackBar) {}

  public alertError(message: string): MatSnackBarRef<TextOnlySnackBar> {
    return this.snackBar.open(message, '❌', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: 'alert-error',
    });
  }

  public alertSuccess(message: string): MatSnackBarRef<TextOnlySnackBar> {
    return this.snackBar.open(message, '✔️', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: 'alert-success',
    });
  }
}
