import Base from "../xy-base.js";
import "../icon/index.js";
import "../loading/index.js";
import style from "./index.css?inline" assert { type: "css" };

class XyDialog extends Base {
	#dialog;

	static get observedAttributes() {
		return ["type", "icon", "loading"];
	}

	constructor() {
		super();
		const shadowRoot = this.attachShadow({ mode: "open" });
		this.adoptedStyle(style);
		shadowRoot.innerHTML = `
      <dialog open>
        <slot name="icon"><xy-icon name="solid/circle-question"></xy-icon></slot>
        <form method="dialog">
          <div class="header">
            <h3 class="title">
            </h3>
            <xy-button type="flat" icon="solid/xmark"></xy-button>
          </div>
          <slot class="content"></slot>
          <slot name="footer" part="footer">
            <xy-button type="primary"></xy-button>
          </slot>
        </form>
      </dialog>
        `;
		this.#dialog = shadowRoot.getElementById("icon");
	}

	get open() {
		return this.getAttribute("open") !== null;
	}

	get loading() {
		return this.getAttribute("loading") !== null;
	}

	get icon() {
		return this.getAttribute("icon");
	}

	get type() {
		return this.getAttribute("type");
	}

	set type(value) {
		this.setAttribute("type", value);
	}

	set icon(value) {
		this.setAttribute("icon", value);
	}

	set open(value) {
		this.toggleAttribute("open", value);
	}

	set loading(value) {
		this.toggleAttribute("loading", value);
	}

	#typeMap = {
		info: {
			name: "solid/circle-info",
			color: "var(--info-color, #1890ff)",
		},
		success: {
			name: "solid/circle-check",
			color: "var(--success-color, #52c41a)",
		},
		warning: {
			name: "solid/circle-exclamation",
			color: "var(--waring-color, #faad14)",
		},
		error: {
			name: "solid/circle-xmark",
			color: "var(--error-color, #f4615c)",
		},
	};

	connectedCallback() {
		// this.addEventListener("transitionend", (ev) => {
		// 	if (ev.propertyName === "transform" && !this.open) {
		// 		this.dispatchEvent(new Event("close"));
		// 		this.remove();
		// 	}
		// });
	}

	attributeChangedCallback(name, oldValue, newValue) {
	// 	if (name == "type") {
	// 		this.#icon.name = this.#typeMap[newValue].name;
	// 		this.#icon.color = this.#typeMap[newValue].color;
	// 	}
	// 	if (name == "icon") {
	// 		this.#icon.name = newValue;
	// 	}
	// 	if (name == "loading") {
	// 		if (!this.#loadEl) {
	// 			this.#loadEl = document.createElement("xy-loading");
	// 		}
	// 		this.loading = newValue !== null;
	// 		if (newValue !== null) {
	// 			this.shadowRoot.prepend(this.#loadEl);
	// 		} else {
	// 			this.shadowRoot.removeChild(this.#loadEl);
	// 		}
	// 	}
	}
}

if (!customElements.get("xy-dialog")) {
	customElements.define("xy-dialog", XyDialog);
}

export const open = (type, text, duration, onclose) => {
	const message = new XyMessage();
	message.timer && clearTimeout(message.timer);
	if (type === "loading") {
		message.loading = true;
	} else {
		message.type = type;
	}
	message.textContent = text || "";
	message.render();
	if (typeof duration === "function") {
		duration();
	} else {
		message.onclose = onclose;
		if (duration !== 0 && !message.loading) {
			message.timer = setTimeout(() => {
				message.open = false;
			}, duration || 3000);
		}
	}
	return message;
};

export const info = (...params) => {
	return open("info", ...params);
};

export const success = (...params) => {
	return open("success", ...params);
};
export const warning = (...params) => {
	return open("warning", ...params);
};
export const error = (...params) => {
	return open("error", ...params);
};
export const loading = (...params) => {
	return open("loading", ...params);
};
export const show = ({
	type = "success",
	icon,
	text,
	duration = 3000,
	onclose,
}) => {
	const message = open(type, text, duration, onclose);
	message.icon = icon;
	return message;
};

export default {
	info,
	success,
	error,
	warning,
	loading,
	show,
};
