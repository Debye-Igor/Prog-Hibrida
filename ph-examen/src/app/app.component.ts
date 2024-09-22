import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { ModalController, IonicModule} from '@ionic/angular';
import { PublicacionesService } from './servicios/publicaciones.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
  providers: [ModalController, IonicModule,PublicacionesService ]
})
export class AppComponent {
  constructor() {}
}
