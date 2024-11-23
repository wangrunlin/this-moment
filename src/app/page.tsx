import {
  Image,
  MapPin,
  MessageSquare,
  Navigation,
  Users,
  Video,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 bg-gradient-to-br from-yellow-50 to-blue-50 dark:from-yellow-950/30 dark:to-blue-950/30">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
            连接空间与瞬间，共享当下新鲜事
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            This Moment
            是一个与线下空间深度结合的内容分享平台，让用户轻松发布与具体地点相关的动态内容，发现真实的本地故事。
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700"
            >
              立即注册
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-950"
            >
              发现附近动态
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 px-4 md:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">
            核心功能
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="dark:bg-gray-900 dark:border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 dark:text-white">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  空间绑定
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  每条动态都与一个具体的线下地点关联，让分享更有意义。
                </p>
              </CardContent>
            </Card>
            <Card className="dark:bg-gray-900 dark:border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 dark:text-white">
                  <MessageSquare className="h-5 w-5 text-blue-500" />
                  熟悉的分享方式
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  像 Twitter 或 Threads
                  一样发布文字、图片或视频，分享最新鲜的故事。
                </p>
              </CardContent>
            </Card>
            <Card className="dark:bg-gray-900 dark:border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 dark:text-white">
                  <Navigation className="h-5 w-5 text-green-500" />
                  地点探索
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  查看他人在不同地点的动态内容，随时随地感受真实的空间脉动。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* User Scenarios */}
      <section className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">
            适用场景
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-orange-100 dark:bg-orange-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image className="h-8 w-8 text-orange-500 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                探店达人
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                记录并分享独特的店铺体验
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 dark:bg-blue-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-blue-500 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                活动参与者
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                实时发布活动的精彩瞬间
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 dark:bg-green-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-500 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                社区居民
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                展示社区生活，与邻里互动交流
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
