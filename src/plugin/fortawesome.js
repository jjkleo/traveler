import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSignOutAlt,
  faCog,
  faSearch,
  faImage,
  faVideo,
  faComment,
  faFile
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSignOutAlt, faCog, faSearch, faImage, faVideo, faComment, faFile);

Vue.component("FontAwesomeIcon", FontAwesomeIcon);
