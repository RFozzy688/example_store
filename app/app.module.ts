import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductComponent } from "./component";
import { ProductComponent2 } from "./builtInDirectives.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [
      // ProductComponent,
      ProductComponent2],
    bootstrap: [
      // ProductComponent,
      ProductComponent2]
  })
  
  export class AppModule {}