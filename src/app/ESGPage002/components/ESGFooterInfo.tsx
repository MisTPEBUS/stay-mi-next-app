"use client";

const ESGFooterInfo = () => {
  return (
    <div className="bg-muted/50 container mx-auto mt-12 max-w-6xl rounded-lg p-6">
      <h3 className="text-foreground mb-3 text-lg font-semibold">關於 ESG 報告書</h3>
      <div className="text-muted-foreground grid grid-cols-1 gap-4 text-sm md:grid-cols-3">
        <div>
          <h4 className="text-foreground mb-2 font-medium">環境 (Environmental)</h4>
          <p>氣候變遷、能源管理、廢棄物處理、水資源管理等環境議題。</p>
        </div>

        <div>
          <h4 className="text-foreground mb-2 font-medium">社會 (Social)</h4>
          <p>員工權益、社區參與、產品責任、供應鏈管理等社會議題。</p>
        </div>

        <div>
          <h4 className="text-foreground mb-2 font-medium">治理 (Governance)</h4>
          <p>公司治理、風險管理、商業道德、法規遵循等治理議題。</p>
        </div>
      </div>
    </div>
  );
};

export default ESGFooterInfo;
