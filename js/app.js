'use strict';

const modalCaptionEl = document.getElementById('modal-caption');
const modalDescEl = document.getElementById('modal-description');
const modalIconEl = document.getElementById('modal-icon');
const modalHeaderEl = document.getElementById('modal-header');

const successfullyIcon = '&#xE876;';
const errorIcon = '&#xE5CD;';


function IsEmptyOrNull(str) {
    if(str === '' || str === undefined || str === null) {
        return true;
    }
    return false;
}

function ValidateParameters(caption, desc, mode) {
    if(IsEmptyOrNull(caption) || IsEmptyOrNull(desc) || IsEmptyOrNull(mode)) {
        throw new Error('Arguments are null!');
    }
}

function SetModalContent(caption, desc) {
    modalCaptionEl.innerText = caption;
    modalDescEl.innerText = desc;
}

function RemoveStatusContainers() {
    const statusContainerEl = document.getElementById('modal-status');
    if(statusContainerEl !== null) {
        statusContainerEl.remove();
    }
}

function ShowModal(caption, desc, mode) {
    ValidateParameters(caption, desc, mode);
    SetModalContent(caption, desc);

    if(mode === 'error') {
        RemoveStatusContainers();
        const modalStatusContainerHtml = `
            <div class="icon-box" id="modal-status">
                <i class="material-icons" id="modal-icon">${errorIcon}</i>
            </div>
        `;
        modalHeaderEl.insertAdjacentHTML('afterbegin', modalStatusContainerHtml);
        modalHeaderEl.style.background = '#e85e6c';
        $('#infoModal').modal('show');
    } else if(mode === 'successfully') {
        RemoveStatusContainers();
        const modalStatusContainerHtml = `
            <div class="icon-box" id="modal-status">
                <i class="material-icons" id="modal-icon">${successfullyIcon}</i>
            </div>
        `;
        modalHeaderEl.insertAdjacentHTML('afterbegin', modalStatusContainerHtml);
        modalHeaderEl.style.background = '#47c9a2';
        $('#infoModal').modal('show');
    } else if(mode === 'loading') {
        RemoveStatusContainers();
        const modalLoaderContainerHtml = `
            <div class="spinner-border text-light" id="modal-status" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        `;
        modalHeaderEl.insertAdjacentHTML('afterbegin', modalLoaderContainerHtml);
        modalHeaderEl.style.background = '#ffbe31';
        $('#infoModal').modal('show');
    }
}

ShowModal('Успех!', 'Отличная работа!', 'loading');
