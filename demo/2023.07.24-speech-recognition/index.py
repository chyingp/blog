# 导入需要的库
import speech_recognition as sr
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, LSTM, Bidirectional

import librosa
import numpy as np

# 初始化语音识别器
recognizer = sr.Recognizer()

# 定义录制的语音文件列表
audio_files = ['audio/no.wav', 'audio/go.wav', 'audio/left.wav']

# 定义与录制的语音对应的文本列表
texts = ['no', 'go', 'left']

# 载入和预处理语音数据
# def load_audio(audio_file):
#     with sr.AudioFile(audio_file) as source:
#         audio_data = recognizer.record(source)
#     return audio_data

# 将文本转换为标签
def text_to_label(text, texts):
    return texts.index(text)

# 加载语音文件
def load_audio(audio_file):
    audio_data, sample_rate = librosa.load(audio_file)
    return audio_data, sample_rate

# 提取MFCC特征
def extract_mfcc(audio_data, sample_rate, num_mfcc=13):
    # 计算MFCC特征
    mfccs = librosa.feature.mfcc(y=audio_data, sr=sample_rate, n_mfcc=num_mfcc)
    # 取特征的均值作为最终特征向量
    feature = np.mean(mfccs.T, axis=0)
    return feature


# 获取特征和标签
def get_features_labels(audio_files, texts):
    features = []
    labels = []
    for audio_file, text in zip(audio_files, texts):
        audio_data, sample_rate = load_audio(audio_file)
        feature = extract_mfcc(audio_data, sample_rate) # 提取语音特征，可以使用MFCC或其他特征提取方法
        label = text_to_label(text, texts)
        features.append(feature)
        labels.append(label)
    return features, labels

# 构建模型
def build_model(input_shape, num_classes):
    model = Sequential()
    model.add(LSTM(64, input_shape=input_shape))
    model.add(Dense(num_classes, activation='softmax'))
    return model

# 加载特征和标签
features, labels = get_features_labels(audio_files, texts)

# # 转换为TensorFlow格式的数组
features = tf.convert_to_tensor(features)
labels = tf.convert_to_tensor(labels)

# 获取输入特征的形状和类别数量
input_shape = features[0].shape
num_classes = len(texts)

# 构建模型
model = build_model(input_shape, num_classes)

# 编译模型
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])

# 训练模型
model.fit(features, labels, epochs=10, batch_size=32)

# 保存模型
model.save('speech_recognition_model.h5')
