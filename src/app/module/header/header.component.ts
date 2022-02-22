import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ConnectionService } from '../../shared/utils/services/firebase/connection.service';
import { map } from 'rxjs/operators';
import { PopUpStateService } from './pop-up-login/pop-up-state.service';
import { OverlayPopUpService } from '../../shared/utils/services/overlay/overlay-pop-up.service';
import { ActivatedRoute } from '@angular/router';
import { IConfigRouter } from '../../shared/utils/interfaces';
import { TimerService } from '../../shared/utils/services/timer/timer.service';
import { OverlayService } from '../../shared/utils/services/overlay/overlay.service';
import { NotificationComponent } from './tooltip/notification/notification.component';

@Component({
  selector: 'elix-header',
  templateUrl: './header.component.html',
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
        })
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 0.8,
          backgroundColor: '#c6ecff',
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  @Input()
  inputValue = '';
  value: any;
  value1: any;
  @Input() name: string;
  @Input() color = 'transparent';
  @Output()
  onSayHello = new EventEmitter<MouseEvent>();
  @Input() background: 'light' | 'dark' | 'transparent' = 'transparent';
  @ViewChild('pointIcon') pointIcon: ElementRef;
  routerData: IConfigRouter[] = [];
  number: number;
  @ViewChild('notification') notification: HTMLElement;

  constructor(
    private _firebaseTry: ConnectionService,
    private _popUpState: PopUpStateService,
    private _overlayPopUpService: OverlayPopUpService,
    private _router: ActivatedRoute,
    private _timer: TimerService,
    private _overlayAll: OverlayService
  ) {
    this._firebaseTry.setUrl('/repository');
  }

  ngOnInit(): void {
    this._timer.counterData$.subscribe((resp) => (this.number = resp.length));

    this._firebaseTry.data
      .snapshotChanges()
      .pipe(
        map((changeData) =>
          changeData.map((c) => {
            let a = c.payload.doc.data();
            return {
              key: c.payload.doc.id,
              value: a[Object.keys(a)[0]],
            };
          })
        )
      )
      .subscribe((data) => data);

    this.routerData = this._router.snapshot.data.data;
  }

  resizeData(event: Event, dinamically: boolean) {
    dinamically ? (this.inputValue = ' ') : (this.inputValue = '');
  }

  retriveCoordinates(event: MouseEvent) {
    this.onSayHello.emit(event);
    this._popUpState.statePopLogin(true);

    this._overlayPopUpService.open(event);
  }

  openBadge() {
    const target = this.notification;
    this._overlayAll.display(this.notification, NotificationComponent);
  }
}
