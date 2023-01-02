import { defineRule, Form } from "vee-validate";
import { required, email, min, max, min_value, max_value } from "@vee-validate/rules";

export default defineNuxtPlugin((app) => {
	defineRule("required", required);
	defineRule("email", email);
	defineRule("min", min);
	defineRule("max", max);
	defineRule("max_value", max_value);
	defineRule("min_value", min_value);

	app.vueApp.component("VForm", Form);
});
