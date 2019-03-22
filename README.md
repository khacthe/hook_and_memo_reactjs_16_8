## ESLINT, MEMO AND HOOK IN  REACT16.8


# Init with create app

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# Memo trong reactjs
- React memo được ra đời ở phiên bản 16.6 giúp cho việc có thể skip việc render khi props được truyền vào là giống nhau.
- Memo là một higher order component. Nó tương tự như React.PureComponent nhưng dành cho function components thay vì là class.

```
const MemoComponent = React.memo(function MyComponent(props) {
  /* Chỉ render khi props thay đổi, giống như mình sử dụng shouldComponentUpdate trong class */
});

```
# Hook trong REACT JS
 - Hooks là những hàm cho phép bạn “kết nối” React state và lifecycle vào các components sử dụng hàm. Với Hooks bạn có thể sử dụng state và lifecycles mà không cần dùng ES6 class. Hook được ra đời ở phiên bản 16.8

- Điểm đặc biệt của Hook đó là chúng ta có thể sử dụng:
 + useState: Để quản lý state của component
 + useEffect: Hook này có tác dụng tương tự như componentDidMount, componentDidUpdate, và componentWillUnmount, nhưng được gom lại thành một hàm duy nhất.

Note: Trong cùng một component, bạn có thể sử dụng bao nhiêu useState và useEffect tùy ý. Nhưng bắt buộc các hooks này phải được đặt ở phía bắt đầu hàm, và không nằm trong if, switch, vòng lặp for, while, hay trong các hàm lồng nhau
