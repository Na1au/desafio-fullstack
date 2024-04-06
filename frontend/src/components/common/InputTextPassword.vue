<script setup>
import { ref } from "vue";


const emit = defineEmits();
const props = defineProps({
  label: String,
  labelColumn: String,
  value: [String, Number],
  valueModifiers: { default: () => ({}) },
});

const event_element = ref(null);
const vEvent = {
  mounted: (el) => (event_element.value = el),
};

const focus = () => {
  const label_input = event_element.value.querySelector("label");
  event_element.value.classList.add("focus_input");
  if (label_input) {
    // label_input.classList.add("label_animation");
    label_input.classList.add("color_focus");
  }
};
const active = () => {
  event_element.value.classList.add("active_input");

};
const blur = () => {
  const label_input = event_element.value.querySelector("label");
  event_element.value.classList.remove("focus_input");
  if (label_input) {
    label_input.classList.remove("color_focus");
    /* if (props.value.length == 0)
      label_input.classList.remove("label_animation"); */
  }
};

const isPasswordVisible = ref(false);
const togglePasswordVisibility = () => {
  var passwordInput = document.querySelector("#password-input");
  if (passwordInput.type === "password") {
    isPasswordVisible.value = true;
    passwordInput.type = "text";
  } else {
    isPasswordVisible.value = false;
    passwordInput.type = "password";
  }
}
</script>

<template>
  <div class="input-text-theme" v-event>
    <label :notempty="props.value.length != 0" :icon-ready="props.icon">{{
      props.label
    }}</label>
    <input
    id="password-input"
    type="password"
      @focus="focus()"
      @blur="blur()"
      @active="active()"
      :value="props.value"
      @input="$emit('update:value', $event.target.value)"
    />
    <ion-icon
      :name="isPasswordVisible ? 'eye-off-outline' : 'eye-outline'"
      class="input-ionicon" @click="togglePasswordVisibility"
    ></ion-icon>
    <div class="labelColum" v-if="props.labelColumn">
      {{ props.labelColumn }}
    </div>
  </div>
</template>

<style scoped>
input:focus {
  outline: none;
}
.input-text-theme {
  border: 1px solid var(--color-theme-black-3);
  width: 100%;
  border-radius: 8px;
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  transition: border-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  gap: 10px;
  position: relative;
  background-color: white;
}

.input-text-theme:hover {
  border: 1px solid var(--color-theme-black-70);
}
.input-text-theme:hover > label {
  color: var(--color-theme-black-8);
}
.input-text-theme.focus_input {
  border: 1px solid var(--color-theme-main);
}
.input-text-theme:active,
.input-text-theme.active_input {
  border: 1px solid var(--color-theme-main);
}

.input-text-theme > label {
  position: absolute;
  font-family: var(--font);
  font-size: var(--font-size-medium);
  color: var(--color-theme-primary);
  background: white;
  top: 0px;
  left: 0px;
  transform: translate(15px, 16px) scale(1);
  transform-origin: left top 0px;
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  width: auto;
  padding: 0px 5px;
}

.input-text-theme > label[icon-ready] {
  transform: translate(40px, 16px) scale(1);
}

.input-text-theme > label[notempty="true"] {
  visibility: hidden;
}

.input-text-theme > label.color_focus {
  color: var(--color-theme-black-8);
}

.input-text-theme input {
  background: transparent;
  border: none;
  width: 100%;
  height: 100%;
  color: var(--color-main);
  font-family: var(--font);
  font-size: var(--font-size-medium);
  z-index: 10;
}

.input-text-theme input::placeholder {
  font-size: var(--font-size-medium);
  color: var(--color-main);
}

.input-text-theme .icon-search {
  margin-left: 10px;
  font-size: var(--icon-size);
  width: 20px;
  height: 20px;
}

.input-ionicon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 100%;
  margin-left: 5px;
  color: var(--color-theme-primary);
}

.input-style-action {
  background: var(--background-containers-2);
  height: 38.8px;
  min-height: 38.8px;
  max-height: 38.8px;
}

.input-style-action:hover,
.input-style-action.focus_input {
  border: 1px solid var(--border-input-theme);
}

.border-none {
  border: none !important;
}
.border-none:hover {
  border: none !important;
}
.focus,
.focus:hover,
.focus:focus {
  border: 1px solid var(--border-input-theme-hover) !important;
}

/**Props: Label Column config */
.labelColum {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background-containers-3);
  padding: 0px 15px;
  margin-right: -10px;
  border-radius: 0px 8px 8px 0px;
}
</style>