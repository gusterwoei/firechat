import { Component, Prop, Listen } from '@stencil/core';
import firebase from 'firebase'

@Component({
	tag: 'app-root',
	styleUrl: 'app-root.css'
})
export class AppRoot {

	@Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;

	@Listen('window:swUpdate')
	async onSWUpdate() {
		const toast = await this.toastCtrl.create({
			message: 'New version available',
			showCloseButton: true,
			closeButtonText: 'Reload'
		});
		await toast.present();
		await toast.onWillDismiss();
		window.location.reload();
	}

	componentWillLoad() {
		var config = {
			apiKey: "AIzaSyAaOjCozjxSsYB80re32-nDu684wo4Ismk",
			authDomain: "hamster-im.firebaseapp.com",
			databaseURL: "https://hamster-im.firebaseio.com",
			projectId: "hamster-im",
			storageBucket: "hamster-im.appspot.com",
			messagingSenderId: "980376673268"
		};
		firebase.initializeApp(config);
		
		const firestore = firebase.firestore();
		const settings = {/* your settings... */ timestampsInSnapshots: true };
		firestore.settings(settings);
	}

	render() {
		return (
			<ion-app>
				<ion-router useHash={false}>
					<ion-route url="/" component="home-page" />
					<ion-route url="/chat" component="chat-room-page" />
					<ion-route url="/login" component="login-page" />
					<ion-route url="/signup" component="signup-page" />
				</ion-router>
				<ion-nav />
			</ion-app>
		);
	}
}
