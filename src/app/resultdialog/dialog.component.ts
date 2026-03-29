import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../app.component';

@Component({
  selector: 'app-resultdialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: false
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    playZwirnie(Math.round(data.successfactor));
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}

function playZwirnie(successfactor: number) {
  let audio = new Audio();

  if (successfactor > 20) {
    audio.src = "assets/audio/lachen.mp3";
  } else if (successfactor > 15) {
    audio.src = "assets/audio/sinnlos.mp3";
  } else if (successfactor > 10) {
    audio.src = "assets/audio/uff.mp3";
  } else if (successfactor > 7) {
    audio.src = "assets/audio/aehmja.mp3";
  } else if (successfactor > 5) {
    audio.src = "assets/audio/stoehnen.mp3";
  } else if (successfactor > 3) {
    audio.src = "assets/audio/nichtschlecht.mp3";
  } else if (successfactor > 2) {
    audio.src = "assets/audio/wunderbar.mp3";
  } else if (successfactor > 1) {
    audio.src = "assets/audio/traeumchen.mp3";
  } else {
    audio.src = "assets/audio/richtiggeil.mp3";
  }

  audio.load();
  audio.play();
}