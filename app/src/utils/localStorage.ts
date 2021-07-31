import { IEmployee } from "../interface";

class localStorageService {
  private ls = window.localStorage;

  setItem(key: string, value: any) {
    value = JSON.stringify(value);
    this.ls.setItem(key, value);
    return true;
  }
  getItem(key: string): Array<IEmployee> | null {
    let value = this.ls.getItem(key);
    try {
      return JSON.parse(value!);
    } catch (e) {
      return null;
    }
  }
}
export default new localStorageService();
