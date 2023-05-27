"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// DOM Element
const users = document.getElementById('users');
// deleatble element
function loadDeletableUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const usersDati = yield fecthUsersDelete();
        if (usersDati.length !== 0) {
            usersDati.forEach((user) => {
                const userCard = document.createElement("div");
                userCard.classList.add('w-100', 'mb-2', 'px-3', 'rounded-pill', 'd-flex', 'justify-content-between', 'align-items-center');
                userCard.style.backgroundColor = 'white';
                userCard.style.height = 'fit-content';
                userCard.innerHTML = `<p class="fs-4">${user.nome}</p>
            <button type="button" class="btn p-0" onclick="deleteUser(${user.id})" style="border: none"><i class="bi bi-x-circle-fill fs-4 text-danger"></i></button>`;
                users.appendChild(userCard);
            });
        }
    });
}
// loading usesrs
function fecthUsersDelete() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://646f6c1109ff19b120873b10.mockapi.io/users');
            const data = yield response.json();
            console.log(data);
            return data;
        }
        catch (_a) {
            (err) => alert(err);
        }
    });
}
// deleting user
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://646f6c1109ff19b120873b10.mockapi.io/users/${id}`, {
                method: 'DELETE'
            });
            const data = yield response.json();
            console.log(data);
            users.innerHTML = '';
            loadDeletableUsers();
        }
        catch (_a) {
            (err) => alert(err);
        }
    });
}
window.onload = () => {
    loadDeletableUsers();
};
