import { useTranslation } from 'react-i18next';
import FadeIn from '../ui/FadeIn';
import SectionHeading from '../ui/SectionHeading';

const SecurityInfrastructure = () => {
  const { t } = useTranslation();
  return (
    <div className='py-24 bg-white'>
      <div className='container mx-auto px-6 md:px-12'>
        <SectionHeading
          title={t('tech_page.security_title')}
          subtitle={t('tech_page.security_subtitle')}
          align='center'
        />

        <FadeIn>
          <div className='flex flex-col md:flex-row justify-center gap-8 mt-12'>
            <div className='p-8 border border-zinc-200 rounded-lg text-center max-w-sm'>
              <h3 className='text-xl font-bold mb-4'>SOC 2 Type II</h3>
              <p className='text-zinc-500'>
                Certified security controls and data privacy practices.
              </p>
            </div>
            <div className='p-8 border border-zinc-200 rounded-lg text-center max-w-sm'>
              <h3 className='text-xl font-bold mb-4'>ISO 27001</h3>
              <p className='text-zinc-500'>
                International standard for information security management.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default SecurityInfrastructure;
