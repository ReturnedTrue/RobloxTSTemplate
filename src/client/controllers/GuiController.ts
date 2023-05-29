import { Controller, OnStart } from "@flamework/core";
import Roact from "@rbxts/roact";
import { Players } from "@rbxts/services";
import { App } from "client/roact/App";

@Controller()
export class GuiController implements OnStart {
	onStart() {
		const playerGui = Players.LocalPlayer.WaitForChild("PlayerGui");
		const app = Roact.createElement(App);

		Roact.mount(app, playerGui);
	}
}
