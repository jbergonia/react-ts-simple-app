import { Card, Layout } from "antd";
import PhotoList from "./photo-list/PhotoList";

const { Header, Footer, Content } = Layout;

const App: React.FC = () => (
  <div className="bg-gray-200">
    <Header />
    <Content>
      <div className="p-5 mx-auto md:max-w-screen-lg">
        <Card title="Photos" bordered={false}>
          <PhotoList />
        </Card>
      </div>
    </Content>
    <Footer className="text-center">
      &copy; {new Date().getFullYear()} Created by Ivan Bergonia.
    </Footer>
  </div>
);

export default App;
