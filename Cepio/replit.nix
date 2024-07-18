{ pkgs }: {
    deps = [
pkgs.nodejs-16_x 
  pkgs.run 
  pkgs.imagemagick6_light
  pkgs.mailutils
  pkgs.python39Packages.pip
        pkgs.nodePackages.typescript-language-server
        pkgs.nodePackages.yarn
        pkgs.replitPackages.jest
        pkgs.libwebp
        pkgs.python
	      pkgs.nodePackages.typescript
        pkgs.libuuid
        pkgs.ffmpeg
        pkgs.imagemagick  
        pkgs.wget
        pkgs.git
        pkgs.nodePackages.pm2
    ];
  env ={
    LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [pkgs.libuuid];
  };
}