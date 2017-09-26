import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	addingContact: boolean;
	contacts: FirebaseListObservable<any[]>;
	newContactForm: FormGroup;
	updateContactForm: FormGroup;
	updatingContact: any;

	constructor(
		private fb: FormBuilder,
		db: AngularFireDatabase
	) {
		this.contacts = db.list('/contacts', {
			query: {
				orderByChild: 'name'
			}
		});

		this.initForms();
	}

	initForms() {
		this.newContactForm = this.fb.group({
			name: ['', Validators.required],
			email: [''],
			phone: ['']
		});

		this.updateContactForm = this.fb.group({
			name: ['', Validators.required],
			email: [''],
			phone: ['']
		});
	}

	addContact() {
		if (this.newContactForm.valid) {
			this.contacts.push(this.newContactForm.value);
			this.newContactForm.reset();
			this.toggleAddingContact();
		}
	}

	cancelAddContact() {
		this.newContactForm.reset();
		this.toggleAddingContact();
	}

	toggleAddingContact() {
		this.addingContact = !this.addingContact;
	}

	toggleUpdate(contact) {
		this.updatingContact = contact;
		this.updateContactForm.patchValue({
			name: contact.name,
			email: contact.email,
			phone: contact.phone
		});
	}

	cancelEdit() {
		this.updatingContact = undefined;
		this.updateContactForm.reset();
	}

	submitEditedContact() {
		this.contacts.update(this.updatingContact.$key, this.updateContactForm.value);
		this.cancelEdit();
	}

	removeContact(key) {
		this.contacts.remove(key);
	}
}
