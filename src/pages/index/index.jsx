import { Button, PageContainer } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import "./index.scss";

export default function Index() {
  const [showModal, setShowModal] = useState(false);

  return (
    <view>
      <PageContainer
        show
        overlay={false}
        onBeforeLeave={() => {
          setShowModal(true);
        }}
      ></PageContainer>
      我现在正常显示,左滑退出
      {showModal && (
        <view className="custom-modal">
          <view className="modal-content">
            <view className="modal-header">
              <text>自定义弹窗</text>
            </view>
            <view className="modal-body">
              <text>
                这是一个自定义的弹窗UI。您可以根据需要修改内容和样式。
              </text>
            </view>
            <view className="modal-footer">
              <Button onClick={() => Taro.exitMiniProgram()}>退出</Button>
            </view>
          </view>
        </view>
      )}
    </view>
  );
}
