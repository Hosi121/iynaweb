import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <h1>中高生神経科学者、集まれ！</h1>
      <p>IYNA Japan は中高生の国際的な非営利団体です。</p>
      <p>日本一大きい中高生の神経科学コミュニティーを作ります！</p>
      <Footer />
    </div>
  );
};

export default HomePage;
