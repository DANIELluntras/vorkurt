import { moduleMetadata } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { CoreModule } from '../@core/core/core.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from '../app/config/auth/firebase';
import { CenterActivityComponent } from '../app/module/account/center-activity/center-activity.component';

export default {
  title: 's/Header',
  component: CenterActivityComponent,

  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        CoreModule,
        MatIconModule,
        FormsModule,
        RouterTestingModule,
        AngularFireModule.initializeApp(firebaseConfig),
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

export const STemplate: Story<CenterActivityComponent> = (
  args: CenterActivityComponent
) => ({
  props: args,
});

export const ColorLight = STemplate.bind({});
ColorLight.arguments = {
  background: 'light',
};
