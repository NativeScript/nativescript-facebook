import { AppiumDriver, SearchOptions, createDriver, Direction, UIElement } from "nativescript-dev-appium";


export async function scrollToElement(driver: AppiumDriver, element: string, direction: Direction = Direction.down) {
    let listView: UIElement;
     if (driver.isAndroid) {
        listView = await driver.findElementByClassName("android.widget.FrameLayout");
    }
    else {
        listView = await driver.findElementByClassName("XCUIElementTypeApplication");
    }
    const listItem = await listView.scrollTo(
        direction,
        () => driver.findElementByText(element, SearchOptions.contains),
        600
    );
    return listItem;
}
