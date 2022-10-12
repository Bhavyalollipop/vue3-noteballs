import { watch } from "vue";

export const useWatchCharacters = (refValue, maxChar) => {
  watch(
    () => refValue,
    (newValue) => {
      if (
        newValue.value?.content?.length === maxChar ||
        newValue.value.length === maxChar
      ) {
        alert(`Only ${maxChar} characters are allowed`);
      }
    },
    { deep: true }
  );
};
