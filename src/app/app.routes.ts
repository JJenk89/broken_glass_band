import { Routes } from '@angular/router';
import { Merch } from './Pages/merch/merch';
import { Home } from './Pages/home/home';
import { About } from './Pages/about/about';
import { Tour } from './Pages/tour/tour';
import { Gallery } from './Pages/gallery/gallery';
import { Contact } from './Pages/contact/contact';
import { NotFound } from './Pages/not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home',
    },
    {
        path: 'about',
        component: About,
        title: 'About',
    },
    {
        path: 'tour',
        component: Tour,
        title: 'Tour Dates',
    },
    {
        path: 'merch',
        component: Merch,
        title: 'Merch',
    },
    {
        path: 'gallery',
        component: Gallery,
        title: 'Gallery',
    },
    {
        path: 'contact',
        component: Contact,
        title: 'Contact',
    },
    {
        path: '**',
        component: NotFound,
        title: '404 Not Found',
    }
];
