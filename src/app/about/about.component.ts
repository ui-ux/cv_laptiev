import { Component, OnInit } from '@angular/core';
import * as html2pdf from 'html2pdf.js'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public now = new Date();
  sdata = this.now.toLocaleDateString();
  timeData = this.now.getHours()+' : '+ this.now.getMinutes();


  constructor() {
  }

  ngOnInit() {

  }

  download() {
    const options = {
      margin: 7,
      filename: 'cv_Sergey_Laptiev.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {scale: 2},
      jsPDF: {orientation: 'portrait'}
    }

    const element: Element = document.getElementById('table')

    html2pdf()
    .from(element)
    .set(options)
    .save()
  }

}
