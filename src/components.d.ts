/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@ionic/core';
import 'ionicons';
import {
  ChatRoom,
} from './global/models/chat-room';


export namespace Components {

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface AppToolbar {
    'label': string;
    'showBackButton': boolean;
  }
  interface AppToolbarAttributes extends StencilHTMLAttributes {
    'label'?: string;
    'showBackButton'?: boolean;
  }

  interface ChatRoomPage {
    'room': ChatRoom;
  }
  interface ChatRoomPageAttributes extends StencilHTMLAttributes {
    'room'?: ChatRoom;
  }

  interface HomePage {}
  interface HomePageAttributes extends StencilHTMLAttributes {}

  interface LoginPage {}
  interface LoginPageAttributes extends StencilHTMLAttributes {}

  interface SignupPage {}
  interface SignupPageAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AppRoot': Components.AppRoot;
    'AppToolbar': Components.AppToolbar;
    'ChatRoomPage': Components.ChatRoomPage;
    'HomePage': Components.HomePage;
    'LoginPage': Components.LoginPage;
    'SignupPage': Components.SignupPage;
  }

  interface StencilIntrinsicElements {
    'app-root': Components.AppRootAttributes;
    'app-toolbar': Components.AppToolbarAttributes;
    'chat-room-page': Components.ChatRoomPageAttributes;
    'home-page': Components.HomePageAttributes;
    'login-page': Components.LoginPageAttributes;
    'signup-page': Components.SignupPageAttributes;
  }


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppToolbarElement extends Components.AppToolbar, HTMLStencilElement {}
  var HTMLAppToolbarElement: {
    prototype: HTMLAppToolbarElement;
    new (): HTMLAppToolbarElement;
  };

  interface HTMLChatRoomPageElement extends Components.ChatRoomPage, HTMLStencilElement {}
  var HTMLChatRoomPageElement: {
    prototype: HTMLChatRoomPageElement;
    new (): HTMLChatRoomPageElement;
  };

  interface HTMLHomePageElement extends Components.HomePage, HTMLStencilElement {}
  var HTMLHomePageElement: {
    prototype: HTMLHomePageElement;
    new (): HTMLHomePageElement;
  };

  interface HTMLLoginPageElement extends Components.LoginPage, HTMLStencilElement {}
  var HTMLLoginPageElement: {
    prototype: HTMLLoginPageElement;
    new (): HTMLLoginPageElement;
  };

  interface HTMLSignupPageElement extends Components.SignupPage, HTMLStencilElement {}
  var HTMLSignupPageElement: {
    prototype: HTMLSignupPageElement;
    new (): HTMLSignupPageElement;
  };

  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement
    'app-toolbar': HTMLAppToolbarElement
    'chat-room-page': HTMLChatRoomPageElement
    'home-page': HTMLHomePageElement
    'login-page': HTMLLoginPageElement
    'signup-page': HTMLSignupPageElement
  }

  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'app-toolbar': HTMLAppToolbarElement;
    'chat-room-page': HTMLChatRoomPageElement;
    'home-page': HTMLHomePageElement;
    'login-page': HTMLLoginPageElement;
    'signup-page': HTMLSignupPageElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}