import { useState } from 'react';
import ComponentCard from '@/components/MyComponents/ComponentCard/ComponentCard';
import ProgressBar from '@/components/MyComponents/ProgressBar/ProgressBar';
import CustomInput from '@/components/MyComponents/Input/Input';

const ProgressBarCard: React.FC = () => {
  const [progress, setProgress] = useState(69);
  const [inputValue, setInputValue] = useState('69');
  const [showPercentage, setShowPercentage] = useState(true);

  const handleProgressChange = (value: string) => {
    const newValue = value.replace(/[^0-9]/g, '');
    setInputValue(newValue);
    
    const newProgress = Number(newValue);
    if (!isNaN(newProgress)) {
      if (newProgress > 100) {
        setProgress(100);
        setInputValue('100');
      } else {
        setProgress(newProgress);
      }
    }
  };

  const handleSubmit = (value: string) => {
    const newProgress = Number(value);
    if (!isNaN(newProgress)) {
      const clampedProgress = Math.min(100, Math.max(0, newProgress));
      setProgress(clampedProgress);
      setInputValue(clampedProgress.toString());
    }
  };

  return (
    <ComponentCard
      title="Progress Bar"
      description="A simple, customizable progress bar"
      githubLink="https://github.com/yourusername/yourrepo/blob/main/src/components/MyComponents/ProgressBar/ProgressBar.tsx"
      buttons={[
        {
          label: showPercentage ? 'HIDE %' : 'SHOW %',
          onClick: () => setShowPercentage(!showPercentage),
        },
      ]}
      input={
        <CustomInput
          value={inputValue}
          onChange={handleProgressChange}
          onSubmit={handleSubmit}
          placeholder="0-100"
        />
      }
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full px-4">
          <ProgressBar progress={progress} showPercentage={showPercentage} />
        </div>
      </div>
    </ComponentCard>
  );
};

export default ProgressBarCard;
