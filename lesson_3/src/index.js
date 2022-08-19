import "./main.scss";
import { addItem } from './item';
import { items } from './items';

const galleryElements = document.getElementById('gallery');

items.map(item => galleryElements.appendChild(addItem(item)));