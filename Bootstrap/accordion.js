
import * as bootstrap from 'bootstrap';

document.addEventListener('DOMContentLoaded', function () {
    new bootstrap.Collapse(document.querySelectorAll('.accordion-collapse'), {
        toggle: false 
    });
});
