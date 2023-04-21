/*
 * @Description:   
 * @Author: YangJianFei
 * @Date: 2023-04-21 11:55:00
 * @LastEditTime: 2023-04-21 12:34:36
 * @LastEditors: YangJianFei
 * @FilePath: \umi-demo\src\pages\Admin\index.tsx
 */
import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';

const HomePage: React.FC = () => {
    const { name } = useModel('global');
    return (
        <PageContainer ghost>
            <div>
                <Guide name={trim(name)} />
            </div>
        </PageContainer>
    );
};

export default HomePage;