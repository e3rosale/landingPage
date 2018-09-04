import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngAfterViewInit() {
    console.log('page has been initialized!!!');

    $('#profile_img').click(() => {
      if ($('#menu_container').is(':visible')) {
        $('#menu_container').slideUp(100);
        // arrow should should be pointing up
        $('#menu_arrow').css({'transform': 'rotate(180deg)'});
      } else {
        $('#menu_container').slideDown(100);
        $('#menu_arrow').css({'transform': 'rotate(0deg)'});
      }
    });

    $(window).click((e) => {
      console.log((<any>e.target).id);
      console.log('typeof(e.target.id): ' + typeof((<any>e.target).id));
      if ((<any>e.target).id != 'profile_img') {
        $('#menu_container').slideUp(100);
        $('#menu_arrow').css({'transform': 'rotate(180deg)'});
      }
    });
  }

}
