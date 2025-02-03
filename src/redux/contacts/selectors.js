import { createSelector } from "@reduxjs/toolkit";
import { selectFilterValue } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.contacts.items;
export const selectIsLoading = (state) => state.contacts.contacts.loading;
export const selectIsError = (state) => state.contacts.contacts.error;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  }
);
