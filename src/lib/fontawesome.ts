// lib/fontawesome.js
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faEnvelope, faMarker } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Prevent FontAwesome from adding its CSS automatically
config.autoAddCss = false;

// Add the icons you want to use to the library
library.add(faPhone);
library.add(faEnvelope);
library.add(faWhatsapp);
library.add(faMarker)

