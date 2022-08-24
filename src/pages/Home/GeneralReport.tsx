import React, { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "redux/settings/hooks";
import { fetchCompanyProfitData } from "redux/thunks/companyThunks";
import CakeChart from "components/Home/CakeChart";
import styles from "styles/home.module.scss";

type GeneralReportProps = {};

const GeneralReport: React.FC<GeneralReportProps> = () => {
  const store = useAppSelector((store) => store.companyReducer);
  const dispatch = useAppDispatch();
  const fetchData = useCallback(async () => {
    await dispatch(fetchCompanyProfitData(store.companyCode));
  }, [store.companyCode, dispatch]);

  useEffect(() => {
    fetchData();
  }, [store.requiresReload, fetchData]);
  return (
    <div className={styles.reports}>
      <div className={styles.generalReport}></div>
      <div className={styles.generalChart}></div>
      <div className={styles.left}>
        <CakeChart
          data={[
            { name: "Income Count", value: store.incomesCount },
            { name: "Payment Count", value: store.paymentsCount },
          ]}
        />
      </div>
      <div className={styles.right}>
        <CakeChart
          data={[
            { name: "Income Total", value: store.incomesTotal },
            { name: "Payment Total", value: store.paymentsTotal },
          ]}
        />
      </div>
    </div>
  );
};

export default GeneralReport;
