import{d as c}from"./vendor.75e86019.js";const d=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&e(t)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}};d();var s=`/*!
 * Pico.css v1.4.4 (https://picocss.com)
 * Copyright 2019-2021 - Licensed under MIT
 */
/**
 * Theme: default
 */
:root {
  --font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  --line-height: 1.5;
  --font-weight: 400;
  --font-size: 16px;
  --border-radius: 0.25rem;
  --border-width: 1px;
  --outline-width: 3px;
  --spacing: 1rem;
  --typography-spacing-vertical: 1.5rem;
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
  --grid-spacing-vertical: 0;
  --grid-spacing-horizontal: var(--spacing);
  --form-element-spacing-vertical: 0.75rem;
  --form-element-spacing-horizontal: 1rem;
  --form-label-font-weight: var(--font-weight);
  --transition: 0.2s ease-in-out;
}
@media (min-width: 576px) {
  :root {
    --font-size: 17px;
  }
}
@media (min-width: 768px) {
  :root {
    --font-size: 18px;
  }
}
@media (min-width: 992px) {
  :root {
    --font-size: 19px;
  }
}
@media (min-width: 1200px) {
  :root {
    --font-size: 20px;
  }
}
@media (min-width: 576px) {
  body > header,
body > main,
body > footer,
section {
    --block-spacing-vertical: calc(var(--spacing) * 2.5);
  }
}
@media (min-width: 768px) {
  body > header,
body > main,
body > footer,
section {
    --block-spacing-vertical: calc(var(--spacing) * 3);
  }
}
@media (min-width: 992px) {
  body > header,
body > main,
body > footer,
section {
    --block-spacing-vertical: calc(var(--spacing) * 3.5);
  }
}
@media (min-width: 1200px) {
  body > header,
body > main,
body > footer,
section {
    --block-spacing-vertical: calc(var(--spacing) * 4);
  }
}
@media (min-width: 576px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.25);
  }
}
@media (min-width: 768px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.5);
  }
}
@media (min-width: 992px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.75);
  }
}
@media (min-width: 1200px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 2);
  }
}
dialog > article {
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
}
@media (min-width: 576px) {
  dialog > article {
    --block-spacing-vertical: calc(var(--spacing) * 2.5);
    --block-spacing-horizontal: calc(var(--spacing) * 1.25);
  }
}
@media (min-width: 768px) {
  dialog > article {
    --block-spacing-vertical: calc(var(--spacing) * 3);
    --block-spacing-horizontal: calc(var(--spacing) * 1.5);
  }
}
a {
  --text-decoration: none;
}
a.secondary, a.contrast {
  --text-decoration: underline;
}
small {
  --font-size: 0.875em;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  --font-weight: 700;
}
h1 {
  --font-size: 2rem;
  --typography-spacing-vertical: 3rem;
}
h2 {
  --font-size: 1.75rem;
  --typography-spacing-vertical: 2.625rem;
}
h3 {
  --font-size: 1.5rem;
  --typography-spacing-vertical: 2.25rem;
}
h4 {
  --font-size: 1.25rem;
  --typography-spacing-vertical: 1.874rem;
}
h5 {
  --font-size: 1.125rem;
  --typography-spacing-vertical: 1.6875rem;
}
[type=checkbox],
[type=radio] {
  --border-width: 2px;
}
[type=checkbox][role=switch] {
  --border-width: 3px;
}
thead th,
thead td,
tfoot th,
tfoot td {
  --border-width: 3px;
}
:not(thead):not(tfoot) > * > td {
  --font-size: 0.875em;
}
pre,
code,
kbd,
samp {
  --font-family: "Menlo", "Consolas", "Roboto Mono", "Ubuntu Monospace",
    "Noto Mono", "Oxygen Mono", "Liberation Mono", monospace,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
kbd {
  --font-weight: bolder;
}
[data-theme=light],
:root:not([data-theme=dark]) {
  color-scheme: light;
  --background-color: #fff;
  --color: #415462;
  --h1-color: #1b2832;
  --h2-color: #24333e;
  --h3-color: #2c3d49;
  --h4-color: #374956;
  --h5-color: #415462;
  --h6-color: #4d606d;
  --muted-color: #73828c;
  --muted-border-color: #edf0f3;
  --primary: #1095c1;
  --primary-hover: #08769b;
  --primary-focus: rgba(16, 149, 193, 0.125);
  --primary-inverse: #fff;
  --secondary: #596b78;
  --secondary-hover: #415462;
  --secondary-focus: rgba(89, 107, 120, 0.125);
  --secondary-inverse: #fff;
  --contrast: #1b2832;
  --contrast-hover: #000;
  --contrast-focus: rgba(89, 107, 120, 0.125);
  --contrast-inverse: #fff;
  --mark-background-color: #fff2ca;
  --mark-color: #543a26;
  --ins-color: #388e3c;
  --del-color: #c62828;
  --blockquote-border-color: var(--muted-border-color);
  --blockquote-footer-color: var(--muted-color);
  --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --form-element-background-color: transparent;
  --form-element-border-color: #a2afb9;
  --form-element-color: var(--color);
  --form-element-placeholder-color: var(--muted-color);
  --form-element-active-background-color: transparent;
  --form-element-active-border-color: var(--primary);
  --form-element-focus-color: var(--primary-focus);
  --form-element-disabled-background-color: #d5dce2;
  --form-element-disabled-border-color: #a2afb9;
  --form-element-disabled-opacity: 0.5;
  --form-element-invalid-border-color: #c62828;
  --form-element-invalid-active-border-color: #d32f2f;
  --form-element-invalid-focus-color: rgba(211, 47, 47, 0.125);
  --form-element-valid-border-color: #388e3c;
  --form-element-valid-active-border-color: #43a047;
  --form-element-valid-focus-color: rgba(67, 160, 71, 0.125);
  --switch-background-color: #bbc6ce;
  --switch-color: var(--primary-inverse);
  --switch-checked-background-color: var(--primary);
  --range-border-color: #d5dce2;
  --range-active-border-color: #bbc6ce;
  --range-thumb-border-color: var(--background-color);
  --range-thumb-color: var(--secondary);
  --range-thumb-hover-color: var(--secondary-hover);
  --range-thumb-active-color: var(--primary);
  --table-border-color: var(--muted-border-color);
  --table-row-stripped-background-color: #f6f8f9;
  --code-background-color: #edf0f3;
  --code-color: var(--muted-color);
  --code-kbd-background-color: var(--contrast);
  --code-kbd-color: var(--contrast-inverse);
  --code-tag-color: #b34d80;
  --code-property-color: #3d888f;
  --code-value-color: #998866;
  --code-comment-color: #a2afb9;
  --accordion-border-color: var(--muted-border-color);
  --accordion-close-summary-color: var(--color);
  --accordion-open-summary-color: var(--muted-color);
  --card-background-color: var(--background-color);
  --card-border-color: var(--muted-border-color);
  --card-box-shadow: 0 0.125rem 1rem rgba(27, 40, 50, 0.04),
    0 0.125rem 2rem rgba(27, 40, 50, 0.08),
    0 0 0 0.0625rem rgba(27, 40, 50, 0.024);
  --card-sectionning-background-color: #fbfbfc;
  --modal-overlay-background-color: rgba(213, 220, 226, 0.8);
  --progress-background-color: #d5dce2;
  --progress-color: var(--primary);
  --loading-spinner-opacity: 0.5;
  --tooltip-background-color: var(--contrast);
  --tooltip-color: var(--contrast-inverse);
  --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23FFF' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(65, 84, 98, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(115, 130, 140, 0.999)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(65, 84, 98, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
  --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(198, 40, 40, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
  --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23FFF' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(65, 84, 98, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
  --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(65, 84, 98, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(56, 142, 60, 0.999)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
}
@media only screen and (prefers-color-scheme: dark) {
  :root:not([data-theme=light]) {
    color-scheme: dark;
    --background-color: #11191f;
    --color: #bbc6ce;
    --h1-color: #edf0f3;
    --h2-color: #e1e6eb;
    --h3-color: #d5dce2;
    --h4-color: #c8d1d8;
    --h5-color: #bbc6ce;
    --h6-color: #afbbc4;
    --muted-color: #73828c;
    --muted-border-color: #1f2d38;
    --primary: #1095c1;
    --primary-hover: #1ab3e6;
    --primary-focus: rgba(16, 149, 193, 0.25);
    --primary-inverse: #fff;
    --secondary: #596b78;
    --secondary-hover: #73828c;
    --secondary-focus: rgba(115, 130, 140, 0.25);
    --secondary-inverse: #fff;
    --contrast: #edf0f3;
    --contrast-hover: #fff;
    --contrast-focus: rgba(115, 130, 140, 0.25);
    --contrast-inverse: #000;
    --mark-background-color: #d1c284;
    --mark-color: #11191f;
    --ins-color: #388e3c;
    --del-color: #c62828;
    --blockquote-border-color: var(--muted-border-color);
    --blockquote-footer-color: var(--muted-color);
    --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    --form-element-background-color: #11191f;
    --form-element-border-color: #374956;
    --form-element-color: var(--color);
    --form-element-placeholder-color: var(--muted-color);
    --form-element-active-background-color: var(--form-element-background-color);
    --form-element-active-border-color: var(--primary);
    --form-element-focus-color: var(--primary-focus);
    --form-element-disabled-background-color: #2c3d49;
    --form-element-disabled-border-color: #415462;
    --form-element-disabled-opacity: 0.5;
    --form-element-invalid-border-color: #b71c1c;
    --form-element-invalid-active-border-color: #c62828;
    --form-element-invalid-focus-color: rgba(198, 40, 40, 0.25);
    --form-element-valid-border-color: #2e7d32;
    --form-element-valid-active-border-color: #388e3c;
    --form-element-valid-focus-color: rgba(56, 142, 60, 0.25);
    --switch-background-color: #374956;
    --switch-color: var(--primary-inverse);
    --switch-checked-background-color: var(--primary);
    --range-border-color: #24333e;
    --range-active-border-color: #2c3d49;
    --range-thumb-border-color: var(--background-color);
    --range-thumb-color: var(--secondary);
    --range-thumb-hover-color: var(--secondary-hover);
    --range-thumb-active-color: var(--primary);
    --table-border-color: var(--muted-border-color);
    --table-row-stripped-background-color: rgba(115, 130, 140, 0.05);
    --code-background-color: #18232c;
    --code-color: var(--muted-color);
    --code-kbd-background-color: var(--contrast);
    --code-kbd-color: var(--contrast-inverse);
    --code-tag-color: #a65980;
    --code-property-color: #599fa6;
    --code-value-color: #8c8473;
    --code-comment-color: #4d606d;
    --accordion-border-color: var(--muted-border-color);
    --accordion-active-summary-color: var(--primary);
    --accordion-close-summary-color: var(--color);
    --accordion-open-summary-color: var(--muted-color);
    --card-background-color: #141e26;
    --card-border-color: #11191f;
    --card-box-shadow: 0 0.125rem 1rem rgba(0, 0, 0, 0.06),
      0 0.125rem 2rem rgba(0, 0, 0, 0.12),
      0 0 0 0.0625rem rgba(0, 0, 0, 0.036);
    --card-sectionning-background-color: #18232c;
    --modal-overlay-background-color: rgba(36, 51, 62, 0.9);
    --progress-background-color: #24333e;
    --progress-color: var(--primary);
    --loading-spinner-opacity: 0.5;
    --tooltip-background-color: var(--contrast);
    --tooltip-color: var(--contrast-inverse);
    --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23FFF' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(162, 175, 185, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(115, 130, 140, 0.999)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
    --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(162, 175, 185, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
    --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(183, 28, 28, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
    --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23FFF' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
    --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(162, 175, 185, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
    --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(162, 175, 185, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(46, 125, 50, 0.999)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  }
}
[data-theme=dark] {
  color-scheme: dark;
  --background-color: #11191f;
  --color: #bbc6ce;
  --h1-color: #edf0f3;
  --h2-color: #e1e6eb;
  --h3-color: #d5dce2;
  --h4-color: #c8d1d8;
  --h5-color: #bbc6ce;
  --h6-color: #afbbc4;
  --muted-color: #73828c;
  --muted-border-color: #1f2d38;
  --primary: #1095c1;
  --primary-hover: #1ab3e6;
  --primary-focus: rgba(16, 149, 193, 0.25);
  --primary-inverse: #fff;
  --secondary: #596b78;
  --secondary-hover: #73828c;
  --secondary-focus: rgba(115, 130, 140, 0.25);
  --secondary-inverse: #fff;
  --contrast: #edf0f3;
  --contrast-hover: #fff;
  --contrast-focus: rgba(115, 130, 140, 0.25);
  --contrast-inverse: #000;
  --mark-background-color: #d1c284;
  --mark-color: #11191f;
  --ins-color: #388e3c;
  --del-color: #c62828;
  --blockquote-border-color: var(--muted-border-color);
  --blockquote-footer-color: var(--muted-color);
  --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --form-element-background-color: #11191f;
  --form-element-border-color: #374956;
  --form-element-color: var(--color);
  --form-element-placeholder-color: var(--muted-color);
  --form-element-active-background-color: var(--form-element-background-color);
  --form-element-active-border-color: var(--primary);
  --form-element-focus-color: var(--primary-focus);
  --form-element-disabled-background-color: #2c3d49;
  --form-element-disabled-border-color: #415462;
  --form-element-disabled-opacity: 0.5;
  --form-element-invalid-border-color: #b71c1c;
  --form-element-invalid-active-border-color: #c62828;
  --form-element-invalid-focus-color: rgba(198, 40, 40, 0.25);
  --form-element-valid-border-color: #2e7d32;
  --form-element-valid-active-border-color: #388e3c;
  --form-element-valid-focus-color: rgba(56, 142, 60, 0.25);
  --switch-background-color: #374956;
  --switch-color: var(--primary-inverse);
  --switch-checked-background-color: var(--primary);
  --range-border-color: #24333e;
  --range-active-border-color: #2c3d49;
  --range-thumb-border-color: var(--background-color);
  --range-thumb-color: var(--secondary);
  --range-thumb-hover-color: var(--secondary-hover);
  --range-thumb-active-color: var(--primary);
  --table-border-color: var(--muted-border-color);
  --table-row-stripped-background-color: rgba(115, 130, 140, 0.05);
  --code-background-color: #18232c;
  --code-color: var(--muted-color);
  --code-kbd-background-color: var(--contrast);
  --code-kbd-color: var(--contrast-inverse);
  --code-tag-color: #a65980;
  --code-property-color: #599fa6;
  --code-value-color: #8c8473;
  --code-comment-color: #4d606d;
  --accordion-border-color: var(--muted-border-color);
  --accordion-active-summary-color: var(--primary);
  --accordion-close-summary-color: var(--color);
  --accordion-open-summary-color: var(--muted-color);
  --card-background-color: #141e26;
  --card-border-color: #11191f;
  --card-box-shadow: 0 0.125rem 1rem rgba(0, 0, 0, 0.06),
    0 0.125rem 2rem rgba(0, 0, 0, 0.12),
    0 0 0 0.0625rem rgba(0, 0, 0, 0.036);
  --card-sectionning-background-color: #18232c;
  --modal-overlay-background-color: rgba(36, 51, 62, 0.9);
  --progress-background-color: #24333e;
  --progress-color: var(--primary);
  --loading-spinner-opacity: 0.5;
  --tooltip-background-color: var(--contrast);
  --tooltip-color: var(--contrast-inverse);
  --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23FFF' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(162, 175, 185, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(115, 130, 140, 0.999)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(162, 175, 185, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
  --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(183, 28, 28, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
  --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23FFF' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(162, 175, 185, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
  --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(162, 175, 185, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(46, 125, 50, 0.999)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
}
/**
 * Document
 * Content-box & Responsive typography
 */
*,
*::before,
*::after {
  box-sizing: border-box;
}
::before,
::after {
  text-decoration: inherit;
  vertical-align: inherit;
}
html {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -ms-text-size-adjust: 100%;
  text-rendering: optimizeLegibility;
  background-color: var(--background-color);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  line-height: var(--line-height);
  font-family: var(--font-family);
  cursor: default;
  tab-size: 4;
}
/**
 * Sectioning
 * Container and responsive spacings for header, main, footer
 */
main {
  display: block;
}
body {
  width: 100%;
  margin: 0;
}
body > header,
body > main,
body > footer {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: var(--block-spacing-vertical) 0;
}
/**
* Container
*/
.container,
.container-fluid {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--spacing);
  padding-left: var(--spacing);
}
@media (min-width: 576px) {
  .container {
    max-width: 510px;
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 700px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 920px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1130px;
  }
}
/**
 * Section
 * Responsive spacings for section
 */
section {
  margin-bottom: var(--block-spacing-vertical);
}
/**
* Grid
* Minimal grid system with auto-layout columns
*/
.grid {
  grid-column-gap: var(--grid-spacing-horizontal);
  grid-row-gap: var(--grid-spacing-vertical);
  display: grid;
  grid-template-columns: 1fr;
  margin: 0;
}
@media (min-width: 992px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(0%, 1fr));
  }
}
.grid > * {
  min-width: 0;
}
/**
 * Horizontal scroller (<figure>)
 */
figure {
  display: block;
  margin: 0;
  padding: 0;
  overflow-x: auto;
}
figure figcaption {
  padding: calc(var(--spacing) * 0.5) 0;
  color: var(--muted-color);
}
/**
 * Typography
 */
b,
strong {
  font-weight: bolder;
}
sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
dl dl,
dl ol,
dl ul,
ol dl,
ul dl {
  margin: 0;
}
ol ol,
ol ul,
ul ol,
ul ul {
  margin: 0;
}
address,
blockquote,
dl,
figure,
form,
ol,
p,
pre,
table,
ul {
  margin-top: 0;
  margin-bottom: var(--typography-spacing-vertical);
  color: var(--color);
  font-style: normal;
  font-weight: var(--font-weight);
  font-size: var(--font-size);
}
a {
  --color: var(--primary);
  --background-color: transparent;
  outline: none;
  background-color: var(--background-color);
  color: var(--color);
  text-decoration: var(--text-decoration);
  transition: background-color var(--transition), color var(--transition), text-decoration var(--transition), box-shadow var(--transition);
}
a:hover, a:active, a:focus {
  --color: var(--primary-hover);
  --text-decoration: underline;
}
a:focus {
  --background-color: var(--primary-focus);
}
a.secondary {
  --color: var(--secondary);
}
a.secondary:hover, a.secondary:active, a.secondary:focus {
  --color: var(--secondary-hover);
}
a.secondary:focus {
  --background-color: var(--secondary-focus);
}
a.contrast {
  --color: var(--contrast);
}
a.contrast:hover, a.contrast:active, a.contrast:focus {
  --color: var(--contrast-hover);
}
a.contrast:focus {
  --background-color: var(--contrast-focus);
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: var(--typography-spacing-vertical);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  font-family: var(--font-family);
}
h1 {
  --color: var(--h1-color);
}
h2 {
  --color: var(--h2-color);
}
h3 {
  --color: var(--h3-color);
}
h4 {
  --color: var(--h4-color);
}
h5 {
  --color: var(--h5-color);
}
h6 {
  --color: var(--h6-color);
}
address ~ h1, address ~ h2, address ~ h3, address ~ h4, address ~ h5, address ~ h6,
blockquote ~ h1,
blockquote ~ h2,
blockquote ~ h3,
blockquote ~ h4,
blockquote ~ h5,
blockquote ~ h6,
dl ~ h1,
dl ~ h2,
dl ~ h3,
dl ~ h4,
dl ~ h5,
dl ~ h6,
figure ~ h1,
figure ~ h2,
figure ~ h3,
figure ~ h4,
figure ~ h5,
figure ~ h6,
form ~ h1,
form ~ h2,
form ~ h3,
form ~ h4,
form ~ h5,
form ~ h6,
ol ~ h1,
ol ~ h2,
ol ~ h3,
ol ~ h4,
ol ~ h5,
ol ~ h6,
p ~ h1,
p ~ h2,
p ~ h3,
p ~ h4,
p ~ h5,
p ~ h6,
pre ~ h1,
pre ~ h2,
pre ~ h3,
pre ~ h4,
pre ~ h5,
pre ~ h6,
table ~ h1,
table ~ h2,
table ~ h3,
table ~ h4,
table ~ h5,
table ~ h6,
ul ~ h1,
ul ~ h2,
ul ~ h3,
ul ~ h4,
ul ~ h5,
ul ~ h6 {
  margin-top: var(--typography-spacing-vertical);
}
hgroup,
.headings {
  margin-bottom: var(--typography-spacing-vertical);
}
hgroup > *,
.headings > * {
  margin-bottom: 0;
}
hgroup > *:last-child,
.headings > *:last-child {
  --color: var(--muted-color);
  --font-weight: unset;
  font-size: 1rem;
  font-family: unset;
}
p {
  margin-bottom: var(--typography-spacing-vertical);
}
small {
  font-size: var(--font-size);
}
ul,
ol {
  padding-right: 0;
  padding-left: var(--spacing);
  padding-inline-start: var(--spacing);
  padding-inline-end: 0;
}
ul li,
ol li {
  margin-bottom: calc(var(--typography-spacing-vertical) * 0.25);
}
ul li {
  list-style: square;
}
mark {
  padding: 0.125rem 0.25rem;
  background-color: var(--mark-background-color);
  color: var(--mark-color);
  vertical-align: baseline;
}
blockquote {
  display: block;
  margin: var(--typography-spacing-vertical) 0;
  padding: var(--spacing);
  border-right: none;
  border-left: 0.25rem solid var(--blockquote-border-color);
  border-inline-start: 0.25rem solid var(--blockquote-border-color);
  border-inline-end: none;
}
blockquote footer {
  margin-top: calc(var(--typography-spacing-vertical) * 0.5);
  color: var(--blockquote-footer-color);
}
abbr[title] {
  border-bottom: 1px dotted;
  text-decoration: none;
  cursor: help;
}
ins {
  color: var(--ins-color);
  text-decoration: none;
}
del {
  color: var(--del-color);
}
::selection {
  background-color: var(--primary-focus);
}
/**
 * Embedded content
 */
audio,
canvas,
iframe,
img,
svg,
video {
  vertical-align: middle;
}
audio,
video {
  display: inline-block;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
iframe {
  border-style: none;
}
img {
  max-width: 100%;
  height: auto;
  border-style: none;
}
svg:not([fill]) {
  fill: currentColor;
}
svg:not(:root) {
  overflow: hidden;
}
/**
 * Button
 */
button {
  margin: 0;
  overflow: visible;
  font-family: inherit;
  text-transform: none;
}
button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}
button::-moz-focus-inner,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
button {
  display: block;
  width: 100%;
  margin-bottom: var(--spacing);
}
[role=button] {
  display: inline-block;
  text-decoration: none;
}
button,
input[type=submit],
input[type=button],
input[type=reset],
[role=button] {
  --background-color: var(--primary);
  --border-color: var(--primary);
  --color: var(--primary-inverse);
  --box-shadow: var(--button-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  padding: var(--form-element-spacing-vertical) var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition), color var(--transition), box-shadow var(--transition);
}
button:hover, button:active, button:focus,
input[type=submit]:hover,
input[type=submit]:active,
input[type=submit]:focus,
input[type=button]:hover,
input[type=button]:active,
input[type=button]:focus,
input[type=reset]:hover,
input[type=reset]:active,
input[type=reset]:focus,
[role=button]:hover,
[role=button]:active,
[role=button]:focus {
  --background-color: var(--primary-hover);
  --border-color: var(--primary-hover);
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  --color: var(--primary-inverse);
}
button:focus,
input[type=submit]:focus,
input[type=button]:focus,
input[type=reset]:focus,
[role=button]:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--primary-focus);
}
button.secondary,
input[type=submit].secondary,
input[type=button].secondary,
input[type=reset],
[role=button].secondary {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  cursor: pointer;
}
button.secondary:hover, button.secondary:active, button.secondary:focus,
input[type=submit].secondary:hover,
input[type=submit].secondary:active,
input[type=submit].secondary:focus,
input[type=button].secondary:hover,
input[type=button].secondary:active,
input[type=button].secondary:focus,
input[type=reset]:hover,
input[type=reset]:active,
input[type=reset]:focus,
[role=button].secondary:hover,
[role=button].secondary:active,
[role=button].secondary:focus {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
  --color: var(--secondary-inverse);
}
button.secondary:focus,
input[type=submit].secondary:focus,
input[type=button].secondary:focus,
input[type=reset]:focus,
[role=button].secondary:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--secondary-focus);
}
button.contrast,
input[type=submit].contrast,
input[type=button].contrast,
input[type=reset].contrast,
[role=button].contrast {
  --background-color: var(--contrast);
  --border-color: var(--contrast);
  --color: var(--contrast-inverse);
}
button.contrast:hover, button.contrast:active, button.contrast:focus,
input[type=submit].contrast:hover,
input[type=submit].contrast:active,
input[type=submit].contrast:focus,
input[type=button].contrast:hover,
input[type=button].contrast:active,
input[type=button].contrast:focus,
input[type=reset].contrast:hover,
input[type=reset].contrast:active,
input[type=reset].contrast:focus,
[role=button].contrast:hover,
[role=button].contrast:active,
[role=button].contrast:focus {
  --background-color: var(--contrast-hover);
  --border-color: var(--contrast-hover);
  --color: var(--contrast-inverse);
}
button.contrast:focus,
input[type=submit].contrast:focus,
input[type=button].contrast:focus,
input[type=reset].contrast:focus,
[role=button].contrast:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--contrast-focus);
}
button.outline,
input[type=submit].outline,
input[type=button].outline,
input[type=reset].outline,
[role=button].outline {
  --background-color: transparent;
  --color: var(--primary);
}
button.outline:hover, button.outline:active, button.outline:focus,
input[type=submit].outline:hover,
input[type=submit].outline:active,
input[type=submit].outline:focus,
input[type=button].outline:hover,
input[type=button].outline:active,
input[type=button].outline:focus,
input[type=reset].outline:hover,
input[type=reset].outline:active,
input[type=reset].outline:focus,
[role=button].outline:hover,
[role=button].outline:active,
[role=button].outline:focus {
  --background-color: transparent;
  --color: var(--primary-hover);
}
button.outline.secondary,
input[type=submit].outline.secondary,
input[type=button].outline.secondary,
input[type=reset].outline.secondary,
[role=button].outline.secondary {
  --color: var(--secondary);
}
button.outline.secondary:hover, button.outline.secondary:active, button.outline.secondary:focus,
input[type=submit].outline.secondary:hover,
input[type=submit].outline.secondary:active,
input[type=submit].outline.secondary:focus,
input[type=button].outline.secondary:hover,
input[type=button].outline.secondary:active,
input[type=button].outline.secondary:focus,
input[type=reset].outline.secondary:hover,
input[type=reset].outline.secondary:active,
input[type=reset].outline.secondary:focus,
[role=button].outline.secondary:hover,
[role=button].outline.secondary:active,
[role=button].outline.secondary:focus {
  --color: var(--secondary-hover);
}
button.outline.contrast,
input[type=submit].outline.contrast,
input[type=button].outline.contrast,
input[type=reset].outline.contrast,
[role=button].outline.contrast {
  --color: var(--contrast);
}
button.outline.contrast:hover, button.outline.contrast:active, button.outline.contrast:focus,
input[type=submit].outline.contrast:hover,
input[type=submit].outline.contrast:active,
input[type=submit].outline.contrast:focus,
input[type=button].outline.contrast:hover,
input[type=button].outline.contrast:active,
input[type=button].outline.contrast:focus,
input[type=reset].outline.contrast:hover,
input[type=reset].outline.contrast:active,
input[type=reset].outline.contrast:focus,
[role=button].outline.contrast:hover,
[role=button].outline.contrast:active,
[role=button].outline.contrast:focus {
  --color: var(--contrast-hover);
}
button[disabled],
input[type=submit][disabled],
input[type=button][disabled],
input[type=reset][disabled],
a[role=button]:not([href]),
[role=button][disabled] {
  opacity: 0.5;
  pointer-events: none;
}
/**
 * Form elements
 */
input,
optgroup,
select,
textarea {
  margin: 0;
  font-size: 1rem;
  line-height: var(--line-height);
  font-family: inherit;
  letter-spacing: inherit;
}
input {
  overflow: visible;
}
select {
  text-transform: none;
}
legend {
  max-width: 100%;
  padding: 0;
  color: inherit;
  white-space: normal;
}
textarea {
  overflow: auto;
}
[type=checkbox],
[type=radio] {
  padding: 0;
}
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}
[type=search] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
:-moz-focusring {
  outline: none;
}
:-moz-ui-invalid {
  box-shadow: none;
}
::-ms-expand {
  display: none;
}
[type=file],
[type=range] {
  padding: 0;
  border-width: 0;
}
input:not([type=checkbox]):not([type=radio]):not([type=range]) {
  height: calc(1rem * var(--line-height) + var(--form-element-spacing-vertical) * 2 + var(--border-width) * 2);
}
fieldset {
  margin: 0;
  margin-bottom: var(--spacing);
  padding: 0;
  border: 0;
}
label,
fieldset legend {
  display: block;
  margin-bottom: calc(var(--spacing) * 0.25);
  font-weight: var(--form-label-font-weight, var(--font-weight));
}
input:not([type=checkbox]):not([type=radio]),
select,
textarea {
  width: 100%;
}
input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file]),
select,
textarea {
  appearance: none;
  padding: var(--form-element-spacing-vertical) var(--form-element-spacing-horizontal);
  vertical-align: middle;
}
input,
select,
textarea {
  --background-color: var(--form-element-background-color);
  --border-color: var(--form-element-border-color);
  --color: var(--form-element-color);
  --box-shadow: none;
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  transition: background-color var(--transition), border-color var(--transition), color var(--transition), box-shadow var(--transition);
}
input:not([type=submit]):not([type=button]):not([type=reset]):not([type=checkbox]):not([type=radio]):not([readonly]):active, input:not([type=submit]):not([type=button]):not([type=reset]):not([type=checkbox]):not([type=radio]):not([readonly]):focus,
select:active,
select:focus,
textarea:active,
textarea:focus {
  --background-color: var(--form-element-active-background-color);
}
input:not([type=submit]):not([type=button]):not([type=reset]):not([role=switch]):not([readonly]):active, input:not([type=submit]):not([type=button]):not([type=reset]):not([role=switch]):not([readonly]):focus,
select:active,
select:focus,
textarea:active,
textarea:focus {
  --border-color: var(--form-element-active-border-color);
}
input:not([type=submit]):not([type=button]):not([type=reset]):not([type=range]):not([type=file]):not([readonly]):focus,
select:focus,
textarea:focus {
  --box-shadow: 0 0 0 var(--outline-width) var(--form-element-focus-color);
}
input:not([type=submit]):not([type=button]):not([type=reset])[disabled],
select[disabled],
textarea[disabled] {
  --background-color: var(--form-element-disabled-background-color);
  --border-color: var(--form-element-disabled-border-color);
  opacity: var(--form-element-disabled-opacity);
}
input:not([type=checkbox]):not([type=radio])[aria-invalid],
select:not([type=checkbox]):not([type=radio])[aria-invalid],
textarea:not([type=checkbox]):not([type=radio])[aria-invalid] {
  padding-right: calc(var(--form-element-spacing-horizontal) + 1.5rem) !important;
  padding-left: var(--form-element-spacing-horizontal);
  padding-inline-start: var(--form-element-spacing-horizontal) !important;
  padding-inline-end: calc(var(--form-element-spacing-horizontal) + 1.5rem) !important;
  background-position: center right 0.75rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}
input:not([type=checkbox]):not([type=radio])[aria-invalid=false],
select:not([type=checkbox]):not([type=radio])[aria-invalid=false],
textarea:not([type=checkbox]):not([type=radio])[aria-invalid=false] {
  background-image: var(--icon-valid);
}
input:not([type=checkbox]):not([type=radio])[aria-invalid=true],
select:not([type=checkbox]):not([type=radio])[aria-invalid=true],
textarea:not([type=checkbox]):not([type=radio])[aria-invalid=true] {
  background-image: var(--icon-invalid);
}
input[aria-invalid=false],
select[aria-invalid=false],
textarea[aria-invalid=false] {
  --border-color: var(--form-element-valid-border-color);
}
input[aria-invalid=false]:active, input[aria-invalid=false]:focus,
select[aria-invalid=false]:active,
select[aria-invalid=false]:focus,
textarea[aria-invalid=false]:active,
textarea[aria-invalid=false]:focus {
  --border-color: var(--form-element-valid-active-border-color) !important;
  --box-shadow: 0 0 0 var(--outline-width) var(--form-element-valid-focus-color) !important;
}
input[aria-invalid=true],
select[aria-invalid=true],
textarea[aria-invalid=true] {
  --border-color: var(--form-element-invalid-border-color);
}
input[aria-invalid=true]:active, input[aria-invalid=true]:focus,
select[aria-invalid=true]:active,
select[aria-invalid=true]:focus,
textarea[aria-invalid=true]:active,
textarea[aria-invalid=true]:focus {
  --border-color: var(--form-element-invalid-active-border-color) !important;
  --box-shadow: 0 0 0 var(--outline-width) var(--form-element-invalid-focus-color) !important;
}
[dir=rtl] input:not([type=checkbox]):not([type=radio])[aria-invalid], [dir=rtl] input:not([type=checkbox]):not([type=radio])[aria-invalid=true], [dir=rtl] input:not([type=checkbox]):not([type=radio])[aria-invalid=false],
[dir=rtl] select:not([type=checkbox]):not([type=radio])[aria-invalid],
[dir=rtl] select:not([type=checkbox]):not([type=radio])[aria-invalid=true],
[dir=rtl] select:not([type=checkbox]):not([type=radio])[aria-invalid=false],
[dir=rtl] textarea:not([type=checkbox]):not([type=radio])[aria-invalid],
[dir=rtl] textarea:not([type=checkbox]):not([type=radio])[aria-invalid=true],
[dir=rtl] textarea:not([type=checkbox]):not([type=radio])[aria-invalid=false] {
  background-position: center left 0.75rem;
}
input::placeholder,
input::-webkit-input-placeholder,
textarea::placeholder,
textarea::-webkit-input-placeholder,
select:invalid {
  color: var(--form-element-placeholder-color);
  opacity: 1;
}
input:not([type=checkbox]):not([type=radio]),
select,
textarea {
  margin-bottom: var(--spacing);
}
select::-ms-expand {
  border: 0;
  background-color: transparent;
}
select:not([multiple]):not([size]) {
  padding-right: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  padding-left: var(--form-element-spacing-horizontal);
  padding-inline-start: var(--form-element-spacing-horizontal);
  padding-inline-end: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  background-image: var(--icon-chevron);
  background-position: center right 0.75rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}
[dir=rtl] select:not([multiple]):not([size]) {
  background-position: center left 0.75rem;
}
input + small,
select + small,
textarea + small {
  display: block;
  width: 100%;
  margin-top: calc(var(--spacing) * -0.75);
  margin-bottom: var(--spacing);
  color: var(--muted-color);
}
label > input, label > select, label > textarea {
  margin-top: calc(var(--spacing) * 0.25);
}
/**
 * Form elements
 * Checkboxes & Radios
 */
[type=checkbox],
[type=radio] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 1.25em;
  height: 1.25em;
  margin-top: -0.125em;
  margin-right: 0.375em;
  margin-left: 0;
  margin-inline-start: 0;
  margin-inline-end: 0.375em;
  border-width: var(--border-width);
  font-size: inherit;
  vertical-align: middle;
  cursor: pointer;
}
[type=checkbox]::-ms-check,
[type=radio]::-ms-check {
  display: none;
}
[type=checkbox]:checked, [type=checkbox]:checked:active, [type=checkbox]:checked:focus,
[type=radio]:checked,
[type=radio]:checked:active,
[type=radio]:checked:focus {
  --background-color: var(--primary);
  --border-color: var(--primary);
  background-image: var(--icon-checkbox);
  background-position: center;
  background-size: 0.75em auto;
  background-repeat: no-repeat;
}
[type=checkbox] ~ label,
[type=radio] ~ label {
  display: inline-block;
  margin-right: 0.375em;
  margin-bottom: 0;
  cursor: pointer;
}
[type=checkbox]:indeterminate {
  --background-color: var(--primary);
  --border-color: var(--primary);
  background-image: var(--icon-minus);
  background-position: center;
  background-size: 0.75em auto;
  background-repeat: no-repeat;
}
[type=radio] {
  border-radius: 50%;
}
[type=radio]:checked, [type=radio]:checked:active, [type=radio]:checked:focus {
  --background-color: var(--primary-inverse);
  border-width: 0.35em;
  background-image: none;
}
[type=checkbox][role=switch] {
  --background-color: var(--switch-background-color);
  --border-color: var(--switch-background-color);
  --color: var(--switch-color);
  width: 2.25em;
  height: 1.25em;
  border: var(--border-width) solid var(--border-color);
  border-radius: 1.25em;
  background-color: var(--background-color);
  line-height: 1.25em;
}
[type=checkbox][role=switch]:focus {
  --background-color: var(--switch-background-color);
  --border-color: var(--switch-background-color);
}
[type=checkbox][role=switch]:checked {
  --background-color: var(--switch-checked-background-color);
  --border-color: var(--switch-checked-background-color);
}
[type=checkbox][role=switch]:before {
  display: block;
  width: calc(1.25em - (var(--border-width) * 2));
  height: 100%;
  border-radius: 50%;
  background-color: var(--color);
  content: "";
  transition: margin 0.1s ease-in-out;
}
[type=checkbox][role=switch]:checked {
  background-image: none;
}
[type=checkbox][role=switch]:checked::before {
  margin-left: calc(1.125em - var(--border-width));
  margin-inline-start: calc(1.125em - var(--border-width));
}
[type=checkbox][aria-invalid=false],
[type=checkbox]:checked[aria-invalid=false],
[type=radio][aria-invalid=false],
[type=radio]:checked[aria-invalid=false],
[type=checkbox][role=switch][aria-invalid=false],
[type=checkbox][role=switch]:checked[aria-invalid=false] {
  --border-color: var(--form-element-valid-border-color);
}
[type=checkbox][aria-invalid=true],
[type=checkbox]:checked[aria-invalid=true],
[type=radio][aria-invalid=true],
[type=radio]:checked[aria-invalid=true],
[type=checkbox][role=switch][aria-invalid=true],
[type=checkbox][role=switch]:checked[aria-invalid=true] {
  --border-color: var(--form-element-invalid-border-color);
}
/**
 * Form elements
 * Alternatives input types (Not Checkboxes & Radios)
 */
[type=color]::-webkit-color-swatch-wrapper {
  padding: 0;
}
[type=color]::-moz-focus-inner {
  padding: 0;
}
[type=color]::-webkit-color-swatch {
  border: none;
  border-radius: calc(var(--border-radius) * 0.5);
}
[type=color]::-moz-color-swatch {
  border: none;
  border-radius: calc(var(--border-radius) * 0.5);
}
input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file])[type=date], input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file])[type=datetime-local], input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file])[type=month], input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file])[type=time], input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file])[type=week] {
  --icon-position: 0.75rem;
  --icon-width: 1rem;
  padding-right: calc(var(--icon-width) + var(--icon-position));
  background-image: var(--icon-date);
  background-position: center right var(--icon-position);
  background-size: var(--icon-width) auto;
  background-repeat: no-repeat;
}
input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file])[type=time] {
  background-image: var(--icon-time);
}
[type=date]::-webkit-calendar-picker-indicator,
[type=datetime-local]::-webkit-calendar-picker-indicator,
[type=month]::-webkit-calendar-picker-indicator,
[type=time]::-webkit-calendar-picker-indicator,
[type=week]::-webkit-calendar-picker-indicator {
  width: var(--icon-width);
  margin-right: calc(var(--icon-width) * -1);
  margin-left: var(--icon-position);
  opacity: 0;
}
[dir=rtl] [type=date],
[dir=rtl] [type=datetime-local],
[dir=rtl] [type=month],
[dir=rtl] [type=time],
[dir=rtl] [type=week] {
  text-align: right;
}
[type=file] {
  --color: var(--muted-color);
  padding: calc(var(--form-element-spacing-vertical) * 0.5) 0;
  border: none;
  border-radius: 0;
  background: none;
}
[type=file]:hover, [type=file]:active, [type=file]:focus {
  border: none;
  background: none;
}
[type=file]::file-selector-button {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  margin-inline-start: 0;
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5) calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition), color var(--transition), box-shadow var(--transition);
}
[type=file]::file-selector-button:hover, [type=file]::file-selector-button:active, [type=file]::file-selector-button:focus {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}
[type=file]::-webkit-file-upload-button {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  margin-inline-start: 0;
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5) calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition), color var(--transition), box-shadow var(--transition);
}
[type=file]::-webkit-file-upload-button:hover, [type=file]::-webkit-file-upload-button:active, [type=file]::-webkit-file-upload-button:focus {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}
[type=file]::-ms-browse {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  margin-inline-start: 0;
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5) calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition), color var(--transition), box-shadow var(--transition);
}
[type=file]::-ms-browse:hover, [type=file]::-ms-browse:active, [type=file]::-ms-browse:focus {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}
[type=range] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 1.25rem;
  background: transparent;
}
[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type=range]::-moz-range-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type=range]::-ms-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  transition: background-color var(--transition), transform var(--transition);
}
[type=range]::-moz-range-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  transition: background-color var(--transition), transform var(--transition);
}
[type=range]::-ms-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  transition: background-color var(--transition), transform var(--transition);
}
[type=range]:hover, [type=range]:focus {
  --range-border-color: var(--range-active-border-color);
  --range-thumb-color: var(--range-thumb-hover-color);
}
[type=range]:active {
  --range-thumb-color: var(--range-thumb-active-color);
}
[type=range]:active::-webkit-slider-thumb {
  transform: scale(1.25);
}
[type=range]:active::-moz-range-thumb {
  transform: scale(1.25);
}
[type=range]:active::-ms-thumb {
  transform: scale(1.25);
}
input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file])[type=search] {
  padding-left: calc(var(--form-element-spacing-horizontal) + 1.75rem);
  border-radius: 5rem;
  background-image: var(--icon-search);
  background-position: center left 1.125rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}
[type=search]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  display: none;
}
/**
 * Table
 */
table {
  width: 100%;
  border-color: inherit;
  border-collapse: collapse;
  border-spacing: 0;
  text-indent: 0;
}
th,
td {
  padding: calc(var(--spacing) / 2) var(--spacing);
  border-bottom: var(--border-width) solid var(--table-border-color);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  text-align: left;
  text-align: start;
}
tfoot th,
tfoot td {
  border-top: var(--border-width) solid var(--table-border-color);
  border-bottom: 0;
}
table[role=grid] tbody tr:nth-child(odd) {
  background-color: var(--table-row-stripped-background-color);
}
/**
 * Code
 */
pre,
code,
kbd,
samp {
  font-size: 0.875em;
  font-family: var(--font-family);
}
pre {
  -ms-overflow-style: scrollbar;
  overflow: auto;
}
pre,
code,
kbd {
  border-radius: var(--border-radius);
  background: var(--code-background-color);
  color: var(--code-color);
  font-weight: var(--font-weight);
  line-height: initial;
}
code,
kbd {
  display: inline-block;
  padding: 0.375rem 0.5rem;
}
pre {
  display: block;
  margin-bottom: var(--spacing);
  overflow-x: auto;
}
pre > code {
  display: block;
  padding: var(--spacing);
  background: transparent;
  font-size: 14px;
  line-height: var(--line-height);
}
code b {
  color: var(--code-tag-color);
  font-weight: var(--font-weight);
}
code i {
  color: var(--code-property-color);
  font-style: normal;
}
code u {
  color: var(--code-value-color);
  text-decoration: none;
}
code em {
  color: var(--code-comment-color);
  font-style: normal;
}
kbd {
  background-color: var(--code-kbd-background-color);
  color: var(--code-kbd-color);
  vertical-align: baseline;
}
/**
 * Miscs
 */
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  border: none;
  border-top: 1px solid var(--muted-border-color);
}
[hidden],
template {
  display: none !important;
}
canvas {
  display: inline-block;
}
/**
 * Accordion (<details>)
 */
details {
  display: block;
  margin-bottom: var(--spacing);
  padding-bottom: calc(var(--spacing) * 0.5);
  border-bottom: var(--border-width) solid var(--accordion-border-color);
}
details summary {
  color: var(--accordion-close-summary-color);
  line-height: 1rem;
  list-style-type: none;
  cursor: pointer;
  transition: color var(--transition);
}
details summary::-webkit-details-marker {
  display: none;
}
details summary::marker {
  display: none;
}
details summary::-moz-list-bullet {
  list-style-type: none;
}
details summary::after {
  display: block;
  width: 1rem;
  height: 1rem;
  float: right;
  transform: rotate(-90deg);
  background-image: var(--icon-chevron);
  background-position: center;
  background-size: 1rem auto;
  background-repeat: no-repeat;
  content: "";
  transition: transform var(--transition);
}
details summary:focus {
  outline: none;
  color: var(--accordion-active-summary-color);
}
details summary ~ * {
  margin-top: calc(var(--spacing) * 0.5);
}
details summary ~ * ~ * {
  margin-top: 0;
}
details[open] > summary {
  margin-bottom: calc(var(--spacing) * 0.25);
}
details[open] > summary:not(:focus) {
  color: var(--accordion-open-summary-color);
}
details[open] > summary::after {
  transform: rotate(0);
}
[dir=rtl] details summary::after {
  float: left;
}
/**
 * Card (<article>)
 */
article {
  margin: var(--block-spacing-vertical) 0;
  padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
  overflow: hidden;
  border-radius: var(--border-radius);
  background: var(--card-background-color);
  box-shadow: var(--card-box-shadow);
}
article > header,
article > footer {
  margin-right: calc(var(--block-spacing-horizontal) * -1);
  margin-left: calc(var(--block-spacing-horizontal) * -1);
  padding: calc(var(--block-spacing-vertical) * 0.66) var(--block-spacing-horizontal);
  background-color: var(--card-sectionning-background-color);
}
article > header {
  margin-top: calc(var(--block-spacing-vertical) * -1);
  margin-bottom: var(--block-spacing-vertical);
  border-bottom: var(--border-width) solid var(--card-border-color);
}
article > footer {
  margin-top: var(--block-spacing-vertical);
  margin-bottom: calc(var(--block-spacing-vertical) * -1);
  border-top: var(--border-width) solid var(--card-border-color);
}
/**
 * Modal (<dialog>)
 */
:root {
  --scrollbar-width: 0px;
}
dialog {
  display: flex;
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: inherit;
  min-width: 100%;
  height: inherit;
  min-height: 100%;
  padding: var(--spacing);
  border: none;
  background-color: var(--modal-overlay-background-color);
}
dialog article {
  max-height: calc(100vh - var(--spacing) * 2);
  overflow: auto;
}
@media (min-width: 576px) {
  dialog article {
    max-width: 510px;
  }
}
@media (min-width: 768px) {
  dialog article {
    max-width: 700px;
  }
}
dialog article > header,
dialog article > footer {
  padding: calc(var(--block-spacing-vertical) * 0.5) var(--block-spacing-horizontal);
}
dialog article > header .close {
  margin: 0;
  margin-left: var(--spacing);
  float: right;
}
dialog article > footer {
  text-align: right;
}
dialog article > footer [role=button] {
  margin-bottom: 0;
}
dialog article > footer [role=button]:not(:first-of-type) {
  margin-left: calc(var(--spacing) * 0.5);
}
dialog article p:last-of-type {
  margin: 0;
}
dialog article .close {
  display: block;
  width: 1rem;
  height: 1rem;
  margin-top: calc(var(--block-spacing-vertical) * -0.5);
  margin-bottom: var(--typography-spacing-vertical);
  margin-left: auto;
  background-image: var(--icon-close);
  background-position: center;
  background-size: auto 1rem;
  background-repeat: no-repeat;
  opacity: 0.5;
  transition: opacity var(--transition);
}
dialog article .close:hover, dialog article .close:active, dialog article .close:focus {
  opacity: 1;
}
dialog:not([open]), dialog[open=false] {
  display: none;
}
.modal-is-open {
  padding-right: var(--scrollbar-width, 0px);
  overflow: hidden;
  pointer-events: none;
}
.modal-is-open dialog {
  pointer-events: auto;
}
.modal-is-opening dialog,
.modal-is-opening dialog > article,
.modal-is-closing dialog,
.modal-is-closing dialog > article {
  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
}
.modal-is-opening dialog,
.modal-is-closing dialog {
  animation-duration: 0.8s;
  animation-name: fadeIn;
}
.modal-is-opening dialog > article,
.modal-is-closing dialog > article {
  animation-delay: 0.2s;
  animation-name: slideInDown;
}
.modal-is-closing dialog,
.modal-is-closing dialog > article {
  animation-delay: 0s;
  animation-direction: reverse;
}
@keyframes fadeIn {
  from {
    background-color: transparent;
  }
  to {
    background-color: var(--modal-overlay-background-color);
  }
}
@keyframes slideInDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
/**
 * Nav
 */
nav,
nav ul {
  display: flex;
}
nav {
  justify-content: space-between;
}
nav ol,
nav ul {
  align-items: center;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
}
nav ol:first-of-type,
nav ul:first-of-type {
  margin-left: calc(var(--spacing) * -0.5);
}
nav ol:last-of-type,
nav ul:last-of-type {
  margin-right: calc(var(--spacing) * -0.5);
}
nav li {
  display: inline-block;
  margin: 0;
  padding: var(--spacing) calc(var(--spacing) * 0.5);
}
nav li > *,
nav li > input:not([type=checkbox]):not([type=radio]) {
  margin-bottom: 0;
}
nav a {
  display: block;
  margin: calc(var(--spacing) * -1) calc(var(--spacing) * -0.5);
  padding: var(--spacing) calc(var(--spacing) * 0.5);
  border-radius: var(--border-radius);
  text-decoration: none;
}
nav a:hover, nav a:active, nav a:focus {
  text-decoration: none;
}
aside nav,
aside ol,
aside ul,
aside li {
  display: block;
}
aside li {
  padding: calc(var(--spacing) * 0.5);
}
aside li a {
  margin: calc(var(--spacing) * -0.5);
  padding: calc(var(--spacing) * 0.5);
}
/**
 * Progress
 */
progress {
  display: inline-block;
  vertical-align: baseline;
}
progress {
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  appearance: none;
  width: 100%;
  height: 0.5rem;
  margin-bottom: calc(var(--spacing) * 0.5);
  overflow: hidden;
  border: 0;
  border-radius: var(--border-radius);
  background-color: var(--progress-background-color);
  color: var(--progress-color);
}
progress::-webkit-progress-bar {
  border-radius: var(--border-radius);
  background: transparent;
}
progress[value]::-webkit-progress-value {
  background-color: var(--progress-color);
}
progress::-moz-progress-bar {
  background-color: var(--progress-color);
}
@media (prefers-reduced-motion: no-preference) {
  progress:indeterminate {
    background: var(--progress-background-color) linear-gradient(to right, var(--progress-color) 30%, var(--progress-background-color) 30%) top left/150% 150% no-repeat;
    animation: progressIndeterminate 1s linear infinite;
  }
  progress:indeterminate[value]::-webkit-progress-value {
    background-color: transparent;
  }
  progress:indeterminate::-moz-progress-bar {
    background-color: transparent;
  }
}
@keyframes progressIndeterminate {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
/**
 * Loading ([aria-busy=true])
 */
[aria-busy=true] {
  cursor: progress;
}
[aria-busy=true]:not(input):not(select):not(textarea)::before {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 0.1875em solid currentColor;
  border-radius: 1em;
  border-right-color: transparent;
  content: "";
  vertical-align: text-bottom;
  vertical-align: -0.125em;
  animation: spinner 0.75s linear infinite;
  opacity: var(--loading-spinner-opacity);
}
[aria-busy=true]:not(input):not(select):not(textarea):not(:empty)::before {
  margin-right: calc(var(--spacing) * 0.5);
  margin-left: 0;
  margin-inline-start: 0;
  margin-inline-end: calc(var(--spacing) * 0.5);
}
[aria-busy=true]:not(input):not(select):not(textarea):empty {
  text-align: center;
}
button[aria-busy=true],
input[type=submit][aria-busy=true],
input[type=button][aria-busy=true],
input[type=reset][aria-busy=true],
a[aria-busy=true] {
  pointer-events: none;
}
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
/**
 * Tooltip ([data-tooltip])
 */
[data-tooltip] {
  position: relative;
}
[data-tooltip]:not(a):not(button):not(input) {
  border-bottom: 1px dotted;
  text-decoration: none;
  cursor: help;
}
[data-tooltip]::before, [data-tooltip]::after {
  display: block;
  z-index: 99;
  position: absolute;
  bottom: 100%;
  left: 50%;
  padding: 0.25rem 0.5rem;
  overflow: hidden;
  transform: translate(-50%, -0.25rem);
  border-radius: var(--border-radius);
  background: var(--tooltip-background-color);
  content: attr(data-tooltip);
  color: var(--tooltip-color);
  font-style: normal;
  font-weight: var(--font-weight);
  font-size: 0.875rem;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
}
[data-tooltip]::after {
  padding: 0;
  transform: translate(-50%, 0rem);
  border-top: 0.3rem solid;
  border-right: 0.3rem solid transparent;
  border-left: 0.3rem solid transparent;
  border-radius: 0;
  background-color: transparent;
  content: "";
  color: var(--tooltip-background-color);
}
[data-tooltip]:focus::before, [data-tooltip]:focus::after, [data-tooltip]:hover::before, [data-tooltip]:hover::after {
  opacity: 1;
}
@media (hover: hover) and (pointer: fine) {
  [data-tooltip]:focus::before, [data-tooltip]:focus::after, [data-tooltip]:hover::before, [data-tooltip]:hover::after {
    animation-duration: 0.2s;
    animation-name: slide;
  }
  [data-tooltip]:focus::after, [data-tooltip]:hover::after {
    animation-name: slideCaret;
  }
}
@keyframes slide {
  from {
    transform: translate(-50%, 0.75rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -0.25rem);
    opacity: 1;
  }
}
@keyframes slideCaret {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -0.25rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0rem);
    opacity: 1;
  }
}
/**
 * Accessibility & User interaction
 */
[aria-controls] {
  cursor: pointer;
}
[aria-disabled=true],
[disabled] {
  cursor: not-allowed;
}
[aria-hidden=false][hidden] {
  display: initial;
}
[aria-hidden=false][hidden]:not(:focus) {
  clip: rect(0, 0, 0, 0);
  position: absolute;
}
a,
area,
button,
input,
label,
select,
summary,
textarea,
[tabindex] {
  -ms-touch-action: manipulation;
}
[dir=rtl] {
  direction: rtl;
}
/**
 * Reduce Motion Features
 */
@media (prefers-reduced-motion: reduce) {
  *:not([aria-busy=true]),
:not([aria-busy=true])::before,
:not([aria-busy=true])::after {
    background-attachment: initial !important;
    animation-duration: 1ms !important;
    animation-delay: -1ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-delay: 0s !important;
    transition-duration: 0s !important;
  }
}
.center {
  text-align: center;
}`,p=Object.defineProperty,u=Object.getOwnPropertyDescriptor,b=(i,r,a,e)=>{for(var n=e>1?void 0:e?u(r,a):r,o=i.length-1,t;o>=0;o--)(t=i[o])&&(n=(e?t(r,a,n):t(n))||n);return e&&n&&p(r,a,n),n};let l=class{render(){return c.html`
            <main class='container center'>
                <img src="./images/logo.jpg" />
                <h1>Welcome to PlumeJS</h1>
                <p>Please check <a href="https://github.com/KiranMantha/plumejs">here</a> for documentation</p>
            </main>
        `}};l=b([c.Component({selector:"app-root",styles:s})],l);
