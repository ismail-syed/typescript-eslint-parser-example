export class Test {
  constructor() {
  }
  public test(param1: Number): Test;
  public test(param1: Test): Test;
  public test(param1: any): Test {
      return new Test();
    }
}
