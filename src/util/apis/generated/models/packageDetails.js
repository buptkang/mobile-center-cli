/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PackageDetails class.
 * @constructor
 * Details of an uploaded package
 *
 * @member {string} [packageId] ID identifying this unique package.
 * 
 * @member {string} [status] The package state.<br>
 * <b>available</b>: The uploaded package has been distributed.<br>
 * <b>unavailable</b>: The uploaded package is not visible to the user. <br>
 * . Possible values include: 'available', 'unavailable'
 * 
 * @member {string} [appName] The app's name (extracted from the uploaded
 * package).
 * 
 * @member {string} [version] The package's version.<br>
 * For iOS: CFBundleVersion from info.plist.
 * For Android: android:versionCode from AppManifest.xml.
 * 
 * @member {string} [shortVersion] The package's short version.<br>
 * For iOS: CFBundleShortVersionString from info.plist.
 * For Android: android:versionName from AppManifest.xml.
 * 
 * @member {string} [releaseNotes] The package's release notes.
 * 
 * @member {string} [provisioningProfileName] The package's release notes.
 * 
 * @member {number} [size] The package's size in bytes.
 * 
 * @member {string} [minOs] The package's minimum required operating system.
 * 
 * @member {string} [fingerprint] MD5 checksum of the package binary.
 * 
 * @member {string} [uploadedAt] UTC time in ISO 8601 format of the uploaded
 * time.
 * 
 * @member {string} [downloadUrl] The URL that hosts the binary for this
 * package.
 * 
 * @member {string} [appIconUrl] A URL to the app's icon.
 * 
 * @member {string} [installUrl] The href required to install a package on a
 * mobile device. On iOS devices will be prefixed with
 * `itms-services://?action=download-manifest&url=`
 * 
 */
function PackageDetails() {
}

/**
 * Defines the metadata of PackageDetails
 *
 * @returns {object} metadata of PackageDetails
 *
 */
PackageDetails.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PackageDetails',
    type: {
      name: 'Composite',
      className: 'PackageDetails',
      modelProperties: {
        packageId: {
          required: false,
          serializedName: 'package_id',
          type: {
            name: 'String'
          }
        },
        status: {
          required: false,
          serializedName: 'status',
          type: {
            name: 'String'
          }
        },
        appName: {
          required: false,
          serializedName: 'app_name',
          type: {
            name: 'String'
          }
        },
        version: {
          required: false,
          serializedName: 'version',
          type: {
            name: 'String'
          }
        },
        shortVersion: {
          required: false,
          serializedName: 'short_version',
          type: {
            name: 'String'
          }
        },
        releaseNotes: {
          required: false,
          serializedName: 'release_notes',
          type: {
            name: 'String'
          }
        },
        provisioningProfileName: {
          required: false,
          serializedName: 'provisioning_profile_name',
          type: {
            name: 'String'
          }
        },
        size: {
          required: false,
          serializedName: 'size',
          type: {
            name: 'Number'
          }
        },
        minOs: {
          required: false,
          serializedName: 'min_os',
          type: {
            name: 'String'
          }
        },
        fingerprint: {
          required: false,
          serializedName: 'fingerprint',
          type: {
            name: 'String'
          }
        },
        uploadedAt: {
          required: false,
          serializedName: 'uploaded_at',
          type: {
            name: 'String'
          }
        },
        downloadUrl: {
          required: false,
          serializedName: 'download_url',
          type: {
            name: 'String'
          }
        },
        appIconUrl: {
          required: false,
          serializedName: 'app_icon_url',
          type: {
            name: 'String'
          }
        },
        installUrl: {
          required: false,
          serializedName: 'install_url',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PackageDetails;