package com.bxwithreactnative;

import android.support.annotation.Nullable;

import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;

import java.util.List;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.shell.MainReactPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {
    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new VectorIconsPackage()
      );
    }

    @Override
     public List<ReactPackage> createAdditionalReactPackages() {
         return getPackages();
     }

    @Nullable
    @Override
    public String getJSMainModuleName() {
        return "index";
    }

     @Override
    public void onCreate() {
      super.onCreate();
      SoLoader.init(this, /* native exopackage */ false);
    }
}
