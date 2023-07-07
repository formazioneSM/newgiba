import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/components/ui-kit/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { CheckboxComponent } from 'src/components/ui-kit/checkbox/checkbox.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from 'src/components/header/header.component';
import { LogoComponent } from 'src/components/ui-kit/logo/logo.component';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from 'src/components/ui-kit/menu/menu.component';
import { DaysComponent } from 'src/components/days/days.component';
import { MatListModule } from '@angular/material/list';
import { ChevronComponent } from 'src/components/ui-kit/chevron/chevron.component';
import { DateNavigationComponent } from 'src/components/date-navigation/date-navigation.component';
import { NgScrollbar } from 'ngx-scrollbar';
import { AnteprimaCommessaComponent } from 'src/components/anteprimaCommessa/anteprima-commessa.component';
import { HttpClientModule } from '@angular/common/http';
import { ActualDayComponent } from 'src/components/actual-day/actual-day.component';
import { IconplusComponent } from 'src/components/ui-kit/iconplus/iconplus.component';
import { TimesComponent } from 'src/components/ui-kit/times/times.component';
import { HoursComponent } from 'src/components/ui-kit/hours/hours.component';
import { InOutOfficeComponent } from 'src/components/in-out-office/in-out-office.component';
import { AutocompleteComponent } from 'src/components/ui-kit/autocomplete/autocomplete.component';
import { InputComponent } from 'src/components/ui-kit/input/input.component';
import { HomeDesktopComponent } from 'src/features/home-desktop/home-desktop.component';
import { DaysDesktopComponent } from 'src/components/days-desktop/days-desktop.component';
@NgModule({
  declarations: [
    ButtonComponent,
    CheckboxComponent,
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    DaysComponent,
    ChevronComponent,
    DateNavigationComponent,
    AnteprimaCommessaComponent,
    ActualDayComponent,
    IconplusComponent,
    TimesComponent,
    HoursComponent,
    InOutOfficeComponent,
    AutocompleteComponent,
    InputComponent,
    DaysDesktopComponent
  ],

  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    MatTableModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    NgScrollbar,
    HttpClientModule,

  ],

  exports: [
    ButtonComponent,
    CheckboxComponent,
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    ChevronComponent,
    DaysComponent,
    DateNavigationComponent,
    AnteprimaCommessaComponent,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatListModule,
    NgScrollbar,
    HttpClientModule,
    ActualDayComponent,
    IconplusComponent,
    TimesComponent,
    HoursComponent,
    InOutOfficeComponent,
    AutocompleteComponent,
    InputComponent,
    DaysDesktopComponent
  ]

})
export class SharedModule { }
