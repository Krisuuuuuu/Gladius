import { createAction, props } from "@ngrx/store";

const signIn = createAction(
  '[Main Page] Sign In',
  props<{ email: string, password: string }>()
);

const signOut = createAction(
  '[User Panel] Sign Out'
);

export const UserActions = {
  signIn,
  signOut
}
