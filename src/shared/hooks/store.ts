import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {AppDispatch, RootState} from "../../app/store/appStore";

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
