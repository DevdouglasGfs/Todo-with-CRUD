/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faAdd,
  faArrowLeft,
  faArrowRight,
  faBagShopping,
  faBasketShopping,
  faBoxesPacking,
  faCamera,
  faCaretDown,
  faCaretUp,
  faCheckSquare,
  faCircleUser,
  faClose,
  faEdit,
  faEnvelopeCircleCheck,
  faEye,
  faEyeSlash,
  faHeadset,
  faHouse,
  faList,
  faMinus,
  faMoneyBillTransfer,
  faMoneyBillTrendUp,
  faMoneyCheck,
  faTicketSimple,
  faTruck,
  faUser,
  faUsers,
  faUsersViewfinder,
} from "@fortawesome/free-solid-svg-icons";
import { App } from "vue";

export function LoadFonts(app: App<Element>) {
  /* add icons to the library */
  library.add(faFacebook);
  library.add(faInstagram);
  library.add(faWhatsapp);
  library.add(faBasketShopping);
  library.add(faBoxesPacking);
  library.add(faTruck);
  library.add(faArrowLeft);
  library.add(faArrowRight);
  library.add(faUser);
  library.add(faHeadset);
  library.add(faList);
  library.add(faEye);
  library.add(faHouse);
  library.add(faCaretDown);
  library.add(faCaretUp);
  library.add(faCamera);
  library.add(faMoneyCheck);
  library.add(faCircleUser);
  library.add(faEnvelopeCircleCheck);
  library.add(faAdd);
  library.add(faMinus);
  library.add(faEdit);
  library.add(faEye);
  library.add(faEyeSlash);
  library.add(faUsersViewfinder);
  library.add(faTicketSimple);
  library.add(faMoneyBillTransfer);
  library.add(faUsers);
  library.add(faMoneyBillTrendUp);
  library.add(faBagShopping);
  library.add(faClose);
  library.add(faCheckSquare);

  app.component('font-awesome-icon', FontAwesomeIcon)
}
