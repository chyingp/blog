import librosa
import numpy as np
from tensorflow.keras.models import load_model

# 定义与录制的语音对应的文本列表
texts = ['no', 'go', 'left']

# 加载语音文件并提取特征
def load_and_extract_feature(audio_file):
    audio_data, sample_rate = librosa.load(audio_file)
    feature = extract_mfcc(audio_data, sample_rate)  # 使用之前定义的extract_mfcc函数提取特征
    return feature

# 提取MFCC特征
def extract_mfcc(audio_data, sample_rate, num_mfcc=13):
    # 计算MFCC特征
    mfccs = librosa.feature.mfcc(y=audio_data, sr=sample_rate, n_mfcc=num_mfcc)
    # 取特征的均值作为最终特征向量
    feature = np.mean(mfccs.T, axis=0)
    return feature

# 加载模型
model = load_model('speech_recognition_model.h5')  # 加载之前保存的模型

# 定义测试语音文件
test_audio_file = 'audio/no-2.wav'

# 提取特征并转换为模型输入形式
test_feature = load_and_extract_feature(test_audio_file)
test_feature = np.expand_dims(test_feature, axis=0)  # 添加额外维度以匹配模型输入形式
test_feature = np.expand_dims(test_feature, axis=1)  # 添加额外维度以匹配模型输入形式

# 进行推理
predicted_label = model.predict(test_feature)
predicted_label = np.argmax(predicted_label, axis=-1)  # 取最大概率的类别标签

# 根据类别标签获取对应的文本
predicted_text = texts[predicted_label[0]]
print("Predicted text:", predicted_text)
