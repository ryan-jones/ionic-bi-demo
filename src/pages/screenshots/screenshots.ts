import { Component, ViewChild, Renderer2 } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { NativeService } from '../../services/native.service';

@IonicPage()
@Component({
  selector: 'page-screenshots',
  templateUrl: 'screenshots.html'
})
export class ScreenshotsPage {
  @ViewChild('myCanvas') canvas: any;

  private image: string;

  private canvasElement: any;
  private lastX: number;
  private lastY: number;
  private currentColor = '#1abc9c';
  private brushSize = 10;
  private availableColors: string[];

  constructor(
    public navParams: NavParams,
    public platform: Platform,
    public renderer: Renderer2,
    private nativeService: NativeService,
    private navCtrl: NavController
  ) {
    this.image = this.navParams.get('image');

    this.availableColors = [
      '#1abc9c',
      '#3498db',
      '#9b59b6',
      '#e67e22',
      '#e74c3c'
    ];
  }

  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;
    this.renderer.setAttribute(this.canvasElement, 'width', this.platform.width() + '');
    this.renderer.setAttribute(this.canvasElement, 'height', this.platform.height() + '');
    this.drawImage();
  }

  private drawImage(): void {
    const ctx = this.canvasElement.getContext('2d');
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 30, img.width, img.height, 0, 0, this.canvasElement.width, this.canvasElement.height);
    };
    img.src = this.image;
  }

  private handleStart(ev: any): void {
    this.lastX = ev.touches[0].pageX;
    this.lastY = ev.touches[0].pageY;
  }

  private handleMove(ev: any): void {
    const ctx = this.canvasElement.getContext('2d');
    const currentX = ev.touches[0].pageX;
    const currentY = ev.touches[0].pageY;
    ctx.beginPath();
    ctx.lineJoin = 'round';
    ctx.moveTo(this.lastX, this.lastY);
    ctx.lineTo(currentX, currentY);
    ctx.closePath();
    ctx.strokeStyle = this.currentColor;
    ctx.lineWidth = this.brushSize;
    ctx.stroke();
    this.lastX = currentX;
    this.lastY = currentY;
  }

  private changeColor = (color: string): string => this.currentColor = color;
  private changeSize = (size): void => this.brushSize = size;

  private checkIfActiveColor(color: string): string {
    if (color === this.currentColor) {
      return 'active-color';
    }
  }

  private checkIfActiveSize(size: number): string {
    if (size === this.brushSize) {
      return 'active-color';
    }
  }

  private clearCanvas(): void {
    const ctx = this.canvasElement.getContext('2d');
    ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    this.drawImage();
  }

  private screenShot(): void {
    this.nativeService.screenShotAndEmail();
    this.viewCtrl.dismiss();
  }

  private cancel = (): Promise<any> => this.navCtrl.pop();
}
